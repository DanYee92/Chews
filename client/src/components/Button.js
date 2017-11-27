import styled from "styled-components";

const StyledButton = styled.button`
  text-align: center;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  color: tomato;
  background: white;
  border: ${props => (props.primary ? "2px solid tomato" : "none")};
  &:hover {
    background: ${props => (props.primary ? "tomato" : "transparent")};
    color: ${props => (props.primary ? "white" : "tomato")};
    text-decoration: ${props => (props.primary ? "none" : "underline")};
  }
`;

export default StyledButton;
