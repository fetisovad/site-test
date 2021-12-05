import React from 'react';
import styled from 'styled-components'

const ApartmentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
`

const ImgWrapper = styled.div`
  width: 50%;
`

const InfoWrapper = styled.div`
  width: 50%;
  border: 2px solid grey;
`

const Img = styled.img`
  max-width: 100%;
`

const GroupList = styled.ul`
  list-style: none;
`

const GroupListItem = styled.li`
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  text-align: right;
  padding: 20px;
  margin: 10px 0;
`

const Apartment = ({apartmentItem}) => {
    return (
        <ApartmentWrapper>
            <ImgWrapper>
                <Img src={`${apartmentItem.layout_image}`}/>
            </ImgWrapper>
            <InfoWrapper>
                <GroupList>
                    <GroupListItem><span>Номер квартиры</span> <span>{apartmentItem.id}</span></GroupListItem>
                    <GroupListItem><span>Цена</span> <span>{apartmentItem.price}</span></GroupListItem>
                    <GroupListItem><span>Количество комнат</span> <span>{apartmentItem.rooms}</span></GroupListItem>
                    <GroupListItem><span>Этаж</span> <span>{apartmentItem.floor}</span></GroupListItem>
                    <GroupListItem><span>Расположение на этаже</span> <span>{apartmentItem.pos_on_floor}</span></GroupListItem>
                    <GroupListItem><span>Общаю площадь</span> <span>{apartmentItem.area_total}</span></GroupListItem>
                    <GroupListItem><span>Жилая площадь</span> <span>{apartmentItem.area_live}</span></GroupListItem>
                    <GroupListItem><span>Площадь кухни</span> <span>{apartmentItem.area_kitchen}</span> </GroupListItem>
                </GroupList>
            </InfoWrapper>
        </ApartmentWrapper>
    );
};

export default Apartment;