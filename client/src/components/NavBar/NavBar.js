import React from 'react';
import styled from 'styled-components'

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
`

const NavBar = () => {
    return (
        <Nav>
            <Logo>Etagi</Logo>
        </Nav>
    );
};

export default NavBar;