// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #eee;
  font-family: 'Poppins', sans-serif;
`;

const Logo = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 30px;
  }

  a {
    text-decoration: none;
    color: #666;
    font-weight: 400;
    transition: color 0.2s ease;

    &:hover {
      color: #333;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>Nova X Joy</Logo>
      <Nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/games">Games</Link></li>
          <li><Link to="/company">Company</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/careers">Carrers</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;