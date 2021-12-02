import React, {useState} from 'react';
import styled from "styled-components";
import Modal from "../Modal/Modal";
import {Link} from "react-router-dom";
import Apartment from "../Apartment/Apartment";

const Table = styled.table`
  margin-top: 30px;
  width: 100%;
  border-collapse: collapse;
`

const TrHead = styled.tr`
  background: red;
`

const ThHead = styled.th`
  padding: 5px;
`

const TrBody = styled.tr`
  background: #61dafb;
  border: 1px solid grey;
`

const TdBody = styled.td`
  padding: 5px;
`

const Img = styled.img`
  cursor: pointer;
  max-width: 60px;
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

const InfoButton = styled.button`
  
`

const ListGroup = ({apartments, handleAllInfo}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [activeModalItem, setActiveModalItem] = useState(false)


    const handleOpenModal = (id) => {
        setIsOpenModal(!isOpenModal)
        setActiveModalItem(id)
    }

    return (
        <>
            {isOpenModal && (
               <>
                   <Overlay/>
                   <Modal activeModalItem={activeModalItem} setIsOpenModal={setIsOpenModal} />
               </>
            )}
            <Table>
                <thead>
                <TrHead>
                    <ThHead>Image</ThHead>
                    <ThHead>Number</ThHead>
                    {/*<ThHead>Position on floor</ThHead>*/}
                    <ThHead>Price</ThHead>
                    <ThHead>Rooms</ThHead>
                    <ThHead>Total area</ThHead>
                    {/*<ThHead>kitchen area</ThHead>*/}
                    {/*<ThHead>Live area</ThHead>*/}
                    <ThHead>All info</ThHead>
                </TrHead>
                </thead>
                <tbody>
                {apartments.map((apartment) => (
                    <TrBody key={apartment.id}>
                        <TdBody>
                            <Img onClick={() => handleOpenModal(apartment.id)} src={`${apartment.layout_image}`} alt={`${apartment.id}`}/>
                        </TdBody>
                        <TdBody>{apartment.id}</TdBody>
                        {/*<TdBody>{apartment.pos_on_floor}</TdBody>*/}
                        <TdBody>{apartment.price}</TdBody>
                        <TdBody>{apartment.rooms}</TdBody>
                        <TdBody>{apartment.area_total}</TdBody>
                        {/*<TdBody>{apartment.area_kitchen}</TdBody>*/}
                        {/*<TdBody>{apartment.area_live}</TdBody>*/}
                        <TdBody>
                            <Link to={`apartments/${apartment.id}`}>
                                <InfoButton onClick={() => handleAllInfo(apartment.id)}>
                                    click
                                </InfoButton>
                            </Link>
                        </TdBody>
                    </TrBody>
                ))}
                </tbody>
            </Table>
        </>
    );
};

export default ListGroup;