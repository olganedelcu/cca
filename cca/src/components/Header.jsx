import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #333; /* Match footer background color */
  border-bottom: 1px solid #646cff; /* Match footer border color */
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  width: 100%; /* Ensure full width */
  margin: 0; /* Remove any margin */
  padding: 0; /* Remove any padding */
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto; /* Center the nav within the header */
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.5rem; /* Adjust padding for smaller screens */
  }
`;

const Logo = styled(Link)`
  font-size: 2rem; /* Increase font size */
  font-weight: 800;
  text-decoration: none;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: #535bf2;
  margin-right: auto; /* Push the logo to the left */
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem; /* Adjust gap for smaller screens */
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #646cff; /* Match footer link color */
  font-weight: 500;
  font-size: 1.2rem; /* Increase font size */
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: var(--gradient);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #535bf2; /* Match footer hover color */
    font-weight: 600; /* Slightly increase weight on hover */
  }

  &:hover::after {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Career Coach Ana</Logo>
        <LinksContainer>
          <NavLink to="/" activeClassName="active">About</NavLink>
          <NavLink to="/about" activeClassName="active" partiallyActive={true}>Podcast</NavLink>
          <NavLink to="/team" activeClassName="active">Team</NavLink>
        </LinksContainer>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;