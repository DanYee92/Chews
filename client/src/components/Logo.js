import React from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";

// export const Logo = styled.h1`
//   &:before {
//     content: "[chews]";
//   }
//   color: tomato;

//   font-size: ${props => (props.large ? "3em" : "1.5em")};
// `;
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
  }
`;
export const LinkedLogo = props => {
    return (<SearchBarLogo {...props}>
      <Logo/>
    </SearchBarLogo>)
};
// export const LinkedLogo = Logo.withComponent(Link);
