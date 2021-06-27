import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "gatsby";
import logo from "../images/Logo.png";

const NavBarLink = styled(Link)`
  text-decoration: none;
  color: #252422;
  white-space: nowrap;
  margin: 0 20px;
  line-height: 50px;
  font-size: 18px;
  text-transform: uppercase;
  :hover {
    color: #e4572e;
  }
  @media (max-width: 922 px) {
    line-height: 50px;
  }
  }
`;

const CustomContainer = styled(Container)`
  max-width: 100vw;
  @media (min-width: 992px) {
    padding: 40px 140px;
`;

const Header = () => {
  return (
    <CustomContainer fluid="md">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <img alt="Inst-Wod logo" src={logo} width="150px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" align="center">
            <Nav.Item>
              <NavBarLink to="/oferta" activeClassName="active">
                Oferta
              </NavBarLink>
            </Nav.Item>
            <Nav.Item activeClassName="active">
              <NavBarLink to="/realizacje">Realizacje</NavBarLink>
            </Nav.Item>
            <Nav.Item activeClassName="active">
              <NavBarLink to="/rekomendacje">Rekomendacje</NavBarLink>
            </Nav.Item>
            <Nav.Item activeClassName="active">
              <NavBarLink to="/about">O FIRMIE</NavBarLink>
            </Nav.Item>
            <Nav.Item activeClassName="active">
              <NavBarLink to="/kontakt">KONTAKT</NavBarLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </CustomContainer>
  );
};

export default Header;
