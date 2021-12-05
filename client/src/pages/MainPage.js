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

    const filterPriceUp = () => {
        setFilteredApartments(_.sortBy(apartments, 'price'))
    }

    const filterPriceDown = () => {
        setFilteredApartments(_.sortBy(apartments, 'price').reverse())
    }

    const filterAreaUp = () => {
        setFilteredApartments(_.sortBy(apartments, 'area_total'))
    }

    const filterAreaDown = () => {
        setFilteredApartments(_.sortBy(apartments, 'area_total').reverse())
    }

    const resetFilter = () => {
        setFilteredApartments(apartments)
    }

    return (
        <>
            <Container>
                <Buttons filterPriceUp={filterPriceUp}
                         filterPriceDown={filterPriceDown}
                         filterAreaUp={filterAreaUp}
                         filterAreaDown={filterAreaDown}
                         resetFilter={resetFilter}
                />
                <ListGroup filteredApartments={filteredApartments}/>
            </Container>
        </>
    );
};

export default MainPage;