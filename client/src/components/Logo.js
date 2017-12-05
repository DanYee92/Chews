import React from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";


const Image = styled.img`
  width: ${props => (props.large ? "70%" : "6em")};
  height: auto;
  margin: 0 auto;
`
export const Logo = props => {
  return <Image src={require("../images/logo_v1.png")} {...props}/>;
}
const SearchBarLogo = styled(Link)`
  margin: 0;
  @media (max-width: 768px) {
    margin: 25%;
    transform: translateX(-50%)
  }
`;
export const LinkedLogo = props => {
    return (<SearchBarLogo {...props}>
      <Logo/>
    </SearchBarLogo>)
};
