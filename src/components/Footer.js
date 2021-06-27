import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import checkIcon from "../images/icons/check_icon.svg";
import infoIcon from "../images/icons/info_icon.svg";
import phoneIcon from "../images/icons/phone_icon.svg";
import locationIcon from "../images/icons/location_icon.svg";
import emailIcon from "../images/icons/email_icon.svg";

const CustomContainer = styled(Container)`
  background-color: #003049;

  padding: 20px 100px;
  @media (max-width: 922px) {
    padding: 20px 15px;
  }
`;

const FooterText = styled.div`
  margin: 12px 0;
  color: ${(props) => (props.first ? "#E4572E" : "#fefefe")};
  font-weight: ${(props) => (props.first ? "bold" : "normal")};
  font-size: ${(props) => (props.first ? "20px" : "16px")};
  display: ${(props) => (props.nip ? "none" : "")};
  @media (max-width: 600px) {
    margin: 8px;
    font-size: 14px;
    display: block;
  }
`;

const RowStyle = {
  justifyContent: "flex-start",
};

const Footer = () => {
  return (
    <CustomContainer fluid>
      <Row lg={5} md={1}>
        <Col md={12}>
          <FooterText first>GODZINY PRACY</FooterText>
          <FooterText>Pn-Sob</FooterText>
          <FooterText>8:00-17:00</FooterText>
        </Col>
        <Col md={12}>
          <FooterText first>TELEFON</FooterText>
          <FooterText>606 438 522</FooterText>
          <FooterText>539 619 223</FooterText>
        </Col>
        <Col md={12}>
          <FooterText first>E-MAIL</FooterText>
          <FooterText>biuro@inst-wod.com</FooterText>
        </Col>
        <Col md={12}>
          <FooterText first>ADRES</FooterText>
          <FooterText>INST_WOD</FooterText>
          <FooterText>ul. Przykładowa</FooterText>
          <FooterText>xx-xxx Miejscowość</FooterText>
        </Col>
        <Col md={12}>
          <FooterText>638-180-13-77</FooterText>
        </Col>
      </Row>
    </CustomContainer>
  );
};

export default Footer;
