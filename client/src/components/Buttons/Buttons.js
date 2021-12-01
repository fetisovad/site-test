import React from 'react';
import styled from 'styled-components'

const ButtonsGroup = styled.div`
  width: 100%;
  background: lightgoldenrodyellow;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`

const ButtonReset = styled.button`
  cursor: pointer;
  background: lightcoral;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  &:hover {
    transform: scale(1.2);
  }
`

const Buttons = () => {
    return (
        <ButtonsGroup>
            <ButtonReset>Фильтр</ButtonReset>
            <ButtonReset>По цене</ButtonReset>
            <ButtonReset>По площади</ButtonReset>
            <ButtonReset>Сброс</ButtonReset>
        </ButtonsGroup>
    );
};

export default Buttons;