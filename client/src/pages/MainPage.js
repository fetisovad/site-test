import React, {useCallback, useContext, useEffect, useState} from 'react';
import NavBar from "../components/NavBar/NavBar";
import styled from 'styled-components'
import Buttons from "../components/Buttons/Buttons";
import axios from "axios";
import ListGroup from "../components/ListGroup/ListGroup";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
`

const MainPage = ({handleAllInfo}) => {
    const [apartments, setApartments] = useState([])

    const getApartments = useCallback(async () => {
        await axios.get('/api/apartments/', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => setApartments(res.data))
            .catch(e => console.log(e))
    }, [apartments, setApartments])

    useEffect(() => {
        getApartments()
    }, [setApartments])

    return (
        <>
            <NavBar/>
            <Container>
                <Buttons/>
                <ListGroup apartments={apartments} handleAllInfo={handleAllInfo}/>
            </Container>
        </>
    );
};

export default MainPage;