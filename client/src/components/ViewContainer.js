import styled from "styled-components";

const ViewContainer = styled.div`
  margin-top: ${props => (props.flush ? "4.75em" : "7em ")};
  @media (max-width: 768px) {
    margin-top: ${props => (props.flush ? "8.7vh" : "7em")};
  }
`;

export default ViewContainer;