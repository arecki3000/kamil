import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  height: ${props => props.height ? props.height : "52px"};
  width: ${props => props.width ? props.width : "auto"};
  border: 1px solid #E4572E;
  background-color: #E4572E;
  color: #fefefe;
  border-radius: 26px;
  transition: all .2s cubic-bezier(.47,0,.74,.71);
  :hover {
    background-color: #fefefe;
    color: #E4572E;
  };

  @media (max-width: 922px) {
    display: block;
    margin: 0 auto;
  }
`

export default StyledButton;