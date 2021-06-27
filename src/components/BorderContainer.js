import styled from "styled-components"
import Row from 'react-bootstrap/Row';

const BorderContainer = styled(Row)`
  width: 100%;
  border-top: 1px solid #E4572E;
  border-bottom: 1px solid #E4572E;
  display: flex;
  padding: 30px 0;
  margin: ${props => props.margin ? props.margin : "0"};
`
export default BorderContainer