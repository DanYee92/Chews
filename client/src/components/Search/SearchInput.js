import styled from "styled-components";
import { FormControl } from "react-bootstrap";

const MySearchBox = styled(FormControl)`
  box-shadow: none;
  border-radius: 0;
  border: 0.12em solid tomato;
  margin: ${props => (props.margin ? props.margin : 0)};
  width: 14em;
  
  &:focus {
    border-color: tomato;
    box-shadow: none;
  }
`;

export default MySearchBox;
