import styled from "styled-components";

const Container = styled.div`
  margin: ${props => (props.margin ? props.margin : "6em")};
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  text-align: ${props => (props.column ? "center" : "left")};

  @media (max-width: 768px) {
    margin: ${props => (props.margin ? props.margin : "1em")};
  }
`;

export default Container;
