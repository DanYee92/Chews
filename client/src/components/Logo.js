import styled from "styled-components";

const Logo = styled.h1`
  &:after {
    content: "[chews]";
  }
  text-align: center;
  font-size: ${props => (props.large ? "3em" : "1em")};
`;

export default Logo;
