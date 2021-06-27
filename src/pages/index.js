import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import IndexImage1 from "../images/index_image1.png";
import IndexImage2 from "../images/index_image2.png";
import Logo from "../images/Logo.png";
import Check from "../images/icons/check_icon.svg";
import { Link } from "gatsby";
import TextElement from "../components/TextElement"
import StyledButton from "../components/StyledButton"
import BorderContainer from "../components/BorderContainer"
 
const StylePaddingZero = {
  padding: 0,
}

const StyleTextContainer = {
  position: "relative",
}

const StyleMarginZero = {
  marginLeft: 0,
  marginRight: 0,
  marginBottom: "50px",
}

const StyleLogo = {
  position: "absolute",
  top: 0,
  left: 10,
  opacity: 0.3,
  width: "200px",
}

const StyleLink = {
  textDecoration: "none",
  whiteSpace: 'nowrap',
  color: "#fefefe",
}

const StyledImage = styled(Image)`
  @media (max-width: 922px) {
    display: none;
  }
`

const OfferElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: ${props => props.margin ? props.margin : ""};

  @media (max-width: 922px) {
    margin: 0;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fefefe;
  white-space: nowrap;
  :hover {
    color: #E4572E;
  };

  @media (max-width: 922px) {
    display: block;
    margin: 0 auto;
  }
`


const IndexPage = () => {
  return (
  <Layout>
    <Container fluid style={StylePaddingZero}>
      <Row style={StyleMarginZero}>
        <Col style={StylePaddingZero} lg={6} md={12}>
          <Image src={IndexImage1} width="100%" />
        </Col>
        <Col lg={{ span: 4, offset: 1 }} style={StyleTextContainer} md={12}>
          <StyledImage src={Logo} style={StyleLogo} />
          <TextElement center padding="80px 0 20px 0" bold size="24px">O NAS</TextElement>
          <TextElement height="34px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TextElement>
        </Col>
      </Row>
      <Row style={StyleMarginZero}>
        <Col lg={{ span: 5, offset: 1 }} >
          <TextElement center bold margin="0 0 50px 0" size="24px" >OFERTA</TextElement>
          <BorderContainer margin="0 0 45px 0">
            <Col lg={6} md={12}>
              <OfferElement margin="0 0 20px 0">
                <Image src={Check} />
                <TextElement margin="0 0 0 25px" >Sieci sanitarne</TextElement>
              </OfferElement>
              <OfferElement margin="0 0 20px 0">
                <Image src={Check} />
                <TextElement margin="0 0 0 25px">Drenaże i odwodnienia</TextElement>
              </OfferElement>
              <OfferElement>
                <Image src={Check} />
                <TextElement margin="0 0 0 25px">Brukarstwo</TextElement>
              </OfferElement>
            </Col>
            <Col lg={6} md={12}>
            <OfferElement margin="0 0 20px 0">
                <Image src={Check} />
                <TextElement margin="0 0 0 25px">Oczyszczalnie ścieków</TextElement>
              </OfferElement>
              <OfferElement margin="0 0 20px 0">
                <Image src={Check} />
                <TextElement margin="0 0 0 25px">Instalacje wewnętrzne</TextElement>
              </OfferElement>
              <OfferElement>
                <Image src={Check} />
                <TextElement margin="0 0 0 25px">Przyłącza wod-kan</TextElement>
              </OfferElement>
            </Col>
          </BorderContainer>
          <StyledLink to="/oferta">
            <StyledButton width="210px">
              Zobacz pełną ofertę
            </StyledButton>
          </StyledLink>
        </Col>
        <Col style={StylePaddingZero} lg={{ span: 5, offset: 1 }} className="d-none d-lg-block">
          <Image src={IndexImage2} width="100%" />
        </Col>
      </Row>
      {/* <Row style={StyleMarginZero}>
        <Col lg={{ span: 10, offset: 1 }} >
          <TextElement center bold margin="0 0 50px 0" size="24px" >RECENZJE KLIENTÓW</TextElement>
          <BorderContainer margin="0 0 45px 0"></BorderContainer>
        </Col>
      </Row> */}
    </Container>
  </Layout>
  );
};

export default IndexPage;
