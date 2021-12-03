import React from 'react';
import styled from 'styled-components'

const ButtonsGroup = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`

const ButtonReset = styled.button`
  color: #FFFFFF;
  cursor: pointer;
  background: #EC1F46;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  &:hover {
    transform: scale(1.2);
  }
`

const Buttons = ({filterPrice, filterArea, resetFilter}) => {
    return (
        <ButtonsGroup>
            <ButtonReset>Фильтр</ButtonReset>
            <ButtonReset onClick={filterPrice}>По цене</ButtonReset>
            <ButtonReset onClick={filterArea}>По площади</ButtonReset>
            <ButtonReset onClick={resetFilter}>Сброс</ButtonReset>
        </ButtonsGroup>
    );
};

export default Buttons;