import React from 'react';
import Apartment from "../components/Apartment/Apartment";

const ApartmentPage = ({apartmentItem}) => {
    return (
        <div>
            <Apartment apartmentItem={apartmentItem}/>
        </div>
    );
};

export default ApartmentPage;