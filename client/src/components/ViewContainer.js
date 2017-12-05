import React from "react"
import styled from "styled-components";

const Container = styled.div`
  margin-top: ${props => (props.flush ? "4.65em" : "7em ")};
  @media (max-width: 768px) {
    margin-top: ${props => (props.flush ? "4.65em" : "7em")};
  }
`;

const ViewContainer = ({ location, children }) => {
  return <Container flush={location.includes("/my-bites") || location.includes("/bite/detail") ? true : false}> 
          { children } 
        </Container>
}

export default ViewContainer;