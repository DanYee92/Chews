import React from "react"
import styled from "styled-components"
import { Grid, Row, Col } from "react-bootstrap";
import Container from "../components/Container";

const Image = styled.img`
  width: 80%
`
const ErrorMessage = styled.div`
  text-align: right;
  margin-top: 55%;
`
export const PageNotFound = () => <Container margin="25vh 10vw">
           <Grid>
             <Row>
               <Col xs={12} md={4}>
                 <ErrorMessage>
                   <h3>404 error</h3>
                   <h3>page not found</h3>
                 </ErrorMessage>
               </Col>
               <Col xs={12} md={8}>
                 <Image src={require("../images/404EmptyJar.png")} />
               </Col>
             </Row>
           </Grid>
         </Container>;  


