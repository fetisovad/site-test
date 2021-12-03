import React, {useState} from 'react';
import styled from "styled-components";
import Modal from "../Modal/Modal";
import {Link} from "react-router-dom";

const Table = styled.table`
  margin-top: 30px;
  width: 100%;
  border-collapse: collapse;
`

const TrHead = styled.tr`
  background: lightcoral;
`

const ThHead = styled.th`
  padding: 5px;
`

const TrBody = styled.tr`
  background: lightcyan;
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
  padding: 10px;
  background: #0A223D;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: white;
`

const ListGroup = ({filteredApartments}) => {
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
                    <ThHead>Планировка</ThHead>
                    <ThHead>Номер</ThHead>
                    <ThHead>Цена</ThHead>
                    <ThHead>Количество комнат</ThHead>
                    <ThHead>Общая площадь</ThHead>
                    <ThHead>Полная информация</ThHead>
                </TrHead>
                </thead>
                <tbody>
                {filteredApartments.map((apartment) => (
                    <TrBody key={apartment.id}>
                        <TdBody>
                            <Img onClick={() => handleOpenModal(apartment.id)} src={`${apartment.layout_image}`} alt={`${apartment.id}`}/>
                        </TdBody>
                        <TdBody>{apartment.id}</TdBody>
                        <TdBody>{apartment.price}</TdBody>
                        <TdBody>{apartment.rooms}</TdBody>
                        <TdBody>{apartment.area_total}</TdBody>
                        <TdBody>
                            <Link to={`apartments/${apartment.id}`}>
                                <InfoButton>
                                    Подробнее
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