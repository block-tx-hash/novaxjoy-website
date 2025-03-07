import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 30px 20px;
  background-color: #333;
  color: #fff;
  font-family: 'Poppins', sans-serif;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Nova X Joy. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;