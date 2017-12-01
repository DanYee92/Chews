import styled from "styled-components";

export const FormGroup = styled.div`
  padding: 1em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${props => (props.align ? props.align : "center")};
  width: ${props => (props.width ? props.width : "100%")};
`;
