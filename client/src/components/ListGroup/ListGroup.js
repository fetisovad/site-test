import React from 'react';
import styled from "styled-components";

const Table = styled.table`
  margin-top: 30px;
  width: 100%;
`

const TrBody = styled.tr`
  background: red;
`

const Tr = styled.tr`
  background: #61dafb;
`


const ListGroup = ({apartments}) => {
    return (
        <Table>
            <thead>
            <TrBody>
                <th>Image</th>
                <th>Number</th>
                <th>Position on floor</th>
                <th>Price</th>
                <th>Rooms</th>
                <th>Total area</th>
                <th>kitchen area</th>
                <th>Live area</th>
            </TrBody>
            </thead>
            <tbody>
            {apartments.map((apartment) => (
                <Tr key={apartment.id}>
                    <td style={{margin: '0 10px'}}>
                        <img style={{maxWidth: '40px'}} src={`${apartment.layout_image}`} alt={`${apartment.id}`}/>
                    </td>
                    <td style={{margin: '0 10px'}}>{apartment.id}</td>
                    <td style={{margin: '0 10px'}}>{apartment.pos_on_floor}</td>
                    <td style={{margin: '0 10px'}}>{apartment.price}</td>
                    <td style={{margin: '0 10px'}}>{apartment.rooms}</td>
                    <td style={{margin: '0 10px'}}>{apartment.area_total}</td>
                    <td style={{margin: '0 10px'}}>{apartment.area_kitchen}</td>
                    <td style={{margin: '0 10px'}}>{apartment.area_live}</td>
                </Tr>
            ))}
            </tbody>
        </Table>
    );
};

export default ListGroup;