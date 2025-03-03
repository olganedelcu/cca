import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #646cff;
  padding: 20px;
  text-align: center;
  display: flex; /* Use flexbox for layout */
  justify-content: space-between; /* Space between the two divs */
  align-items: center; /* Center items vertically */

  a {
    color: #535bf2;
    margin: 0;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LeftLinks = styled.div`
  display: flex;
  gap: 1rem; /* Space between links */
`;

const RightLinks = styled.div`
  display: flex;
  gap: 1rem; /* Space between links */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftLinks>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </LeftLinks>
      <RightLinks>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </RightLinks>
    </FooterContainer>
  );
};

export default Footer;