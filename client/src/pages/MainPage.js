import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Buttons from "../components/Buttons/Buttons";
import axios from "axios";
import ListGroup from "../components/ListGroup/ListGroup";
import _ from 'lodash'

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
`

const ModalWrapper = styled.div`
  width: 600px;
  height: 600px;
  background: #0A223D;
  border-radius: 8px;
  padding: 30px;
  z-index: 20;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const SaveButton = styled.button`
  padding: 10px;
  background: #EC1F46;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: white;
  margin: 0 10px;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: aliceblue;
  opacity: 0.7;
  z-index: 10;
`

const Input = styled.input`
  width: 70%;
  margin: 10px;
`

const InputLabel = styled.label`
  
`

const InputWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  border: 2px solid white;
  padding: 10px;
`

const MainPage = () => {
    const [apartments, setApartments] = useState([])
    const [filterForm, setFilterForm] = useState({
        minPrice: 0,
        maxPrice: 0,
        minRooms: 0,
        maxRooms: 0,
    })
    const [filteredApartments, setFilteredApartments] = useState(apartments)
    const [isOpenModalFilter, setIsOpenModalFilter] = useState(false)
    const [activePriceFilter, setActivePriceFilter] = useState(false)
    const [activeAreaFilter, setActiveAreaFilter] = useState(false)
    const [activeRoomFilter, setActiveRoomFilter] = useState(false)

    useEffect(() => {
        const getApartments = async () => {
            await axios.get('/api/apartments/', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setApartments(res.data)
                setFilteredApartments(res.data)
            })
                .catch(e => console.log(e))
        }
        getApartments()
    }, [])

    // , [setApartments])

    const filterPrice = () => {
        setActivePriceFilter(!activePriceFilter)
        if (activePriceFilter) {
            setFilteredApartments(_.sortBy(apartments, 'price'))
        } else {
            setFilteredApartments(_.sortBy(apartments, 'price').reverse())
        }
    }

    const filterArea = () => {
        setActiveAreaFilter(!activeAreaFilter)
        if (activeAreaFilter) {
            setFilteredApartments(_.sortBy(apartments, 'area_total'))
        } else {
            setFilteredApartments(_.sortBy(apartments, 'area_total').reverse())
        }
    }

    const filterRooms = () => {
        setActiveRoomFilter(!activeRoomFilter)
        if (activeRoomFilter) {
            setFilteredApartments(_.sortBy(apartments, 'rooms'))
        } else {
            setFilteredApartments(_.sortBy(apartments, 'rooms').reverse())
        }
    }

    const resetFilter = () => {
        setFilteredApartments(apartments)
    }

    const handleModalFilter = () => {
        setIsOpenModalFilter(!isOpenModalFilter)
        setFilterForm({
            minPrice: parseInt(_.sortBy(apartments, 'price')[0].price),
            maxPrice: parseInt(_.sortBy(apartments, 'price').reverse()[0].price),
            minRooms: parseInt(_.sortBy(apartments, 'price')[0].rooms),
            maxRooms: parseInt(_.sortBy(apartments, 'price').reverse()[0].rooms),
        })
    }
    const changeFilterForm = (e) => {
        setFilterForm({
            ...filterForm,
            [e.target.name]: e.target.value
        })
    }

    const saveFilterValue = () => {
        const arr = apartments.filter(apart =>
            apart.price >= parseInt(filterForm.minPrice)
            &&
            apart.price <= parseInt(filterForm.maxPrice)
            &&
            apart.rooms >= parseInt(filterForm.minRooms)
            &&
            apart.rooms <= parseInt(filterForm.maxRooms)
        )
        if (
            filterForm.minPrice === ''
            ||
            filterForm.maxPrice === ''
            ||
            filterForm.minRooms === ''
            ||
            filterForm.maxRooms === ''
        ) {
            alert('Заполните все данные')
        } else {
            setFilteredApartments(arr)
            setIsOpenModalFilter(!isOpenModalFilter)
        }
    }

    return (
        <>
            {isOpenModalFilter &&
            (
                <>
                    <Overlay/>
                    <ModalWrapper>
                        <InputWrapper>
                            <h3>Цена</h3>
                            <InputLabel htmlFor="minPrice">От</InputLabel>
                            <Input
                                onChange={changeFilterForm}
                                type='number'
                                id='minPrice'
                                name='minPrice'
                                placeholder={filterForm.minPrice}
                            />
                            <InputLabel htmlFor="maxPrice">До</InputLabel>
                            <Input
                                onChange={changeFilterForm}
                                type='number'
                                id='maxPrice'
                                name='maxPrice'
                                placeholder={filterForm.maxPrice}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <h3>Количество комнат</h3>
                            <InputLabel htmlFor="minRooms">От</InputLabel>
                            <Input
                                onChange={changeFilterForm}
                                type='text'
                                id='minRooms'
                                name='minRooms'
                                placeholder={filterForm.minRooms}
                            />
                            <InputLabel htmlFor="maxRooms">До</InputLabel>
                            <Input
                                onChange={changeFilterForm}
                                type='text'
                                id='maxRooms'
                                name='maxRooms'
                                placeholder={filterForm.maxRooms}
                            />
                        </InputWrapper>
                        <div>
                            <SaveButton onClick={saveFilterValue}>Сохранить</SaveButton>
                            <SaveButton onClick={handleModalFilter}>Закрыть</SaveButton>
                        </div>
                    </ModalWrapper>
                </>
            )
            }
            <Container>
                <Buttons filterArea={filterArea}
                         filterPrice={filterPrice}
                         resetFilter={resetFilter}
                         filterRooms={filterRooms}
                         handleModalFilter={handleModalFilter}
                />
                <ListGroup filteredApartments={filteredApartments}/>
            </Container>
        </>
    );
};

export default MainPage;