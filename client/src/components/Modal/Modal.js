import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from "axios";

const ModalWrapper = styled.div`
  width: 600px;
  height: 600px;
  background: #0A223D;
  border-radius: 8px;
  padding: 30px;
  z-index: 20;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const CloseButton = styled.button`
  padding: 10px;
  background: #EC1F46;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: white;
`

const Img = styled.img`
  width: 500px;
`

const Modal = ({activeModalItem, setIsOpenModal}) => {
    const [ImgSrc, setImgSrc] = useState('')



    useEffect(() =>{
        const getLayout = async () => {
            await axios.get(`/api/apartments/${activeModalItem}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {id: activeModalItem}
            })
                .then(res => setImgSrc(res.data.layout_image))
                .catch(e => console.log(e))
        }
        getLayout()
    }, [activeModalItem])

    return (
        <ModalWrapper>
            <Img src={`${ImgSrc}`}/>
            <CloseButton onClick={() => setIsOpenModal(false)}>Закрыть</CloseButton>
        </ModalWrapper>
    );
};

export default Modal;