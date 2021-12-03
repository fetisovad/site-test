import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  background: #0A223D;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 20px;
  margin-bottom: 30px;
  color: #FFFFFF;
`

const Logo = styled.a`
  font-size: 36px;
  color: white;
`

const NavBar = () => {
    return (
        <Nav>
            <Link to='/' style={{textDecoration: 'none'}}>
                <Logo>Etagi</Logo>
            </Link>
        </Nav>
    );
};

export default NavBar;