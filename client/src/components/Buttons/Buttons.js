import React from 'react';
import styled from 'styled-components'

const ButtonsGroup = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`

const Button = styled.button`
  color: #FFFFFF;
  cursor: pointer;
  background: #EC1F46;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  &:first-child {
    background: #0A223D;
  }
  &:hover {
    transform: scale(1.2);
  }
`

const Buttons = ({handleModalFilter, filterArea, filterPrice, filterRooms, resetFilter}) => {
    return (
       <>
           <ButtonsGroup>
               <Button onClick={handleModalFilter}>Фильтр</Button>
               <Button onClick={filterPrice}>По цене</Button>
               <Button onClick={filterArea}>По площади</Button>
               <Button onClick={filterRooms}>По комнатам</Button>
               <Button onClick={resetFilter}>Сброс</Button>
           </ButtonsGroup>
       </>
    );
};

export default Buttons;