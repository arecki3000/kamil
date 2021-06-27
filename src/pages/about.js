import * as React from "react";
import Layout from "../components/Layout";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import TextElement from "../components/TextElement";
import BorderContainer from "../components/BorderContainer";
import Placeholder from "../images/Image.png"

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

const StyleCustomBorder = {
  borderTop: "1px solid #003049",
  borderBottom: "1px solid #003049",
}

const StyleCustomText = {
  textAlign: "center",
}


const About = () => {
  return (
  <Layout>
    <Container fluid style={StylePaddingZero}>
      <Row style={StyleMarginZero}>
        <Col lg={{ span: 10, offset: 1 }}>
          <TextElement bold margin="30px 0 50px 0" size="24px" align="center" style={StyleCustomText}>O NAS</TextElement>
          <BorderContainer style={StyleCustomBorder}>
          <Row style={StyleMarginZero}>
            <Col md={12} lg={5}>
              <Image fluid src={Placeholder} />
            </Col>
            <Col md={12} lg={7}>
              <TextElement margin="0 0 30px 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</TextElement>
              <TextElement margin="0 0 30px 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</TextElement>
            </Col>
          </Row>
          <Row style={StyleMarginZero}>
            <Col md={12} lg={{span:5, order: 12}}>
              <Image fluid src={Placeholder} />
            </Col>
            <Col md={12} lg={{span :7, order: 1}}>
              <TextElement margin="0 0 30px 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</TextElement>
              <TextElement margin="0 0 30px 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</TextElement>
            </Col>
          </Row>
          </BorderContainer>
        </Col>
      </Row>
    </Container>
  </Layout>);
};

export default About;
