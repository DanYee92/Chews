import React from "react";
import styled from "styled-components"
import Container from "../components/Container";
import { Logo } from "../components/Logo";
import { FormGroup } from "../components/Form";
import Button from "../components/Button";
import MySearchBox from "../components/Search/SearchInput";

const LandingContainer = styled.div`
  background-image: url(${require("../images/restaurant-with-friends.jpg")});
  background-position: center top;
  background-size: cover;
  width: 100%;
  height: auto
`

const BackgroundDarken = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  background-position: center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
`;


export class Landing extends React.Component {
  componentWillMount() {
    document.title = "Chews";
  }

  render() {
    return <div>
        <LandingContainer>
          <BackgroundDarken>
            <Container column margin="0 10vw" style={{ padding: "25vh 0" }}>
              <Logo large />
              <h3 style={{color: "white", fontWeight: "lighter"}}>Humanizing the traveler's dining experience</h3>
              <form onSubmit={this.props.handleSearchSubmit}>
                <FormGroup>
                  <MySearchBox landing="true" name="searchQuery" type="text" placeholder="Try 'Chicago'" onChange={this.props.handleInputChange} value={this.props.searchQuery} />
                  <Button type="submit" primary large>
                    Search
                  </Button>
                </FormGroup>
              </form>
            </Container>
          </BackgroundDarken>
        </LandingContainer>
        <p>
          Lorem ipsum dolor amet tumeric biodiesel slow-carb mumblecore,
          master cleanse air plant single-origin coffee selvage next level.
          Try-hard thundercats chia adaptogen waistcoat af cred cardigan.
          Poke VHS la croix tilde deep v sustainable af farm-to-table woke.
          Waistcoat pitchfork crucifix, marfa direct trade microdosing irony
          small batch tumblr chicharrones woke. Trust fund marfa pop-up
          aesthetic keytar fanny pack tacos coloring book mustache authentic
          flexitarian. Flannel copper mug cold-pressed aesthetic. Four loko
          disrupt copper mug single-origin coffee banh mi beard.
        </p>
      </div>;
  }
};
