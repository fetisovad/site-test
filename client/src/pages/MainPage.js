import React, {useCallback, useEffect, useState} from 'react';
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

const MainPage = () => {
    const [apartments, setApartments] = useState([])
    const [filteredApartments, setFilteredApartments] = useState(apartments)
    const [activePriceFilter, setActivePriceFilter] = useState(false)
    const [activeAreaFilter, setActiveAreaFilter] = useState(false)
    const [activeRoomFilter, setActiveRoomFilter] = useState(false)

    const getApartments = useCallback(async () => {
        await axios.get('/api/apartments/', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setApartments(res.data)
            setFilteredApartments(res.data)
        })
            .catch(e => console.log(e))
    }, [])

    useEffect(() => {
        getApartments()
    }, [setApartments])

    const filterPrice = () => {
        setActivePriceFilter(!activePriceFilter)
        if(activePriceFilter) {
            setFilteredApartments(_.sortBy(apartments, 'price'))
        } else {
            setFilteredApartments(_.sortBy(apartments, 'price').reverse())
        }
    }

    const filterArea = () => {
        setActiveAreaFilter(!activeAreaFilter)
        if(activeAreaFilter) {
            setFilteredApartments(_.sortBy(apartments, 'area_total'))
        } else {
            setFilteredApartments(_.sortBy(apartments, 'area_total').reverse())
        }
    }

    const filterRooms = () => {
        setActiveRoomFilter(!activeRoomFilter)
        if(activeRoomFilter) {
            setFilteredApartments(_.sortBy(apartments, 'rooms'))
        } else {
            setFilteredApartments(_.sortBy(apartments, 'rooms').reverse())
        }
    }

    const resetFilter = () => {
        setFilteredApartments(apartments)
    }

    return (
        <>
            <Container>
                <Buttons filterArea={filterArea}
                         filterPrice={filterPrice}
                         resetFilter={resetFilter}
                         filterRooms={filterRooms}
                />
                <ListGroup filteredApartments={filteredApartments}/>
            </Container>
        </>
    );
};

export default MainPage;