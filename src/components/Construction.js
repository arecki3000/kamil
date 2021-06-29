import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import TextElement from "./TextElement";
import UnderConstruction from "../images/construction.svg";

const Construction = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center" lg={{ span: 6, offset: 3 }}>
          <Image fluid src={UnderConstruction} />
          <TextElement size="30px" margin="30px 0">
            STRONA W BUDOWIE
          </TextElement>
        </Col>
      </Row>
    </Container>
  );
};

export default Construction;
