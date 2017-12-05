import styled from "styled-components";

const StyledButton = styled.button`
  font-size: ${props => (props.large ? "1.5em" : "1em")};
  text-align: center;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  color: tomato;
  background: rgba(255, 255, 255, 0.8);
  border: ${props => (props.primary ? "2px solid tomato" : "none")};
  max-width: 10em;
  &:hover {
    background: ${props => (props.primary ? "tomato" : "transparent")};
    color: ${props => (props.primary ? "white" : "tomato")};
    text-decoration: ${props => (props.primary ? "none" : "underline")};
  }
`;

export default StyledButton;
