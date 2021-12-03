import React, {useEffect, useState} from 'react';
import Apartment from "../components/Apartment/Apartment";
import {useParams} from "react-router-dom";
import axios from "axios";


const ApartmentPage = () => {
    const {id} = useParams()
    const [apartmentItem, setApartmentItem] = useState('')


    const getApartments = async () => {
        await axios.get(`/api/apartments/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {id}
        })
            .then(res => {
                setApartmentItem(res.data)
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getApartments()
    }, [setApartmentItem])

    return (
        <div>
            <Apartment apartmentItem={apartmentItem}/>
        </div>
    );
};

export default ApartmentPage;