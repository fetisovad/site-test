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

const MainPage = () => {
    const [apartments, setApartments] = useState([])
    const [filteredApartments, setFilteredApartments] = useState(apartments)

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

    useEffect(() => {
        getApartments()
    }, [setApartments])
    console.log(filteredApartments)

    const filterPrice = () => {
        console.log("filterPrice")
        setFilteredApartments(_.sortBy(apartments, 'price'))
    }

    const filterArea = () => {
        setFilteredApartments(_.sortBy(apartments, 'total_area'))

    }

    const resetFilter = () => {
        setFilteredApartments(apartments)
    }

    return (
        <>
            <Container>
                <Buttons filterPrice={filterPrice}
                         filterArea={filterArea}
                         resetFilter={resetFilter}
                />
                <ListGroup filteredApartments={filteredApartments}/>
            </Container>
        </>
    );
};

export default MainPage;