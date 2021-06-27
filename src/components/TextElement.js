import React from "react";
import styled from "styled-components"

const TextElement = styled.div`
  font-size: ${props => props.size ? props.size : "18px"};
  font-weight: ${props => props.bold ? "bold" : "normal"};
  padding: ${props => props.padding ? props.padding : "0"};
  margin: ${props => props.margin ? props.margin : "0"};
  line-height: ${props => props.height ? props.height : 'normal'};

  @media (max-width: 922px) {
    text-align: ${props => props.center ? "center" : "left"};
    padding: 30px;
  }
`
export default TextElement