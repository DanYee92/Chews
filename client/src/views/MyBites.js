import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import API from "../util/API";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Tabs, Tab } from "material-ui/Tabs";
import { BitePaper } from "../components/BitePaper"


export class MyBites extends React.Component {
	state = {
		myBites: null
	}

  componentWillMount() {
    document.title = "My Bites | Chews";
    // if user is not logged in
    if(!this.props.userId) {
      // redirect user to homepage
      // this.props.history.replace("/")
    }
  }

	componentDidMount() {
    // const myId = this.props.userId || "auth0|5a2171e2083226773d5c2f4a";
    const myId = this.props.userId;
		API.getUserInfo(myId)
      .then(res => {
        // create an array to store relevant bites info
        let myBites = []
        
        // if the user has any bites, go through them
        if (res.data[0].bites) {
          res.data[0].bites.map(bite => {
            // get the local and traveler information, if it exists
            let localId = null
            let travelerId = null
            if(bite.localId) {
              localId = bite.localId;
            }
            if(bite.travelerId) {
              travelerId = bite.travelerId;
            }

            // save relevant bite information to an object
            const thisBite = {
              _id: bite._id,
              biteDate: bite.biteDate,
              restaurant: bite.restaurant,
              city: bite.city,
              startDateRange: bite.startDateRange,
              endDateRange: bite.endDateRange,
              isBooked: bite.isBooked,
            };

            // if there is a traveler id and the user is the local
            if (travelerId && myId === localId._id) {
              // record the traveler as the other party
              thisBite.otherParty = travelerId;
              // else if there is a traveler id and the user is the traveler
            } else if (travelerId && myId === travelerId._id) {
              // record the local as the other party
              thisBite.otherParty = localId;
              // else if there is no traveler id
            } else {
              // don't record any name
              thisBite.otherParty = null;
            }

            // push the relevant info to an array
            myBites.push(thisBite);
          });
        } else {
          // if the user has no bites, make myBites falsy
          myBites = null;
        }

        // save the results and myBites in state
        this.setState({ myInfo: res.data, myBites: myBites });
      })
      .catch(err => console.error(err));
  }
  
	render() {
    return <MuiThemeProvider>
        <Tabs>
          <Tab label="Upcoming" value="a">
            <Grid>
              <Row>
                <Col xs={12} md={12}>
                  <h2>All Upcoming Bites</h2>

                  {/** if there are bites, go through them and make papers for each of them */}
                  {this.state.myBites ? this.state.myBites
                      .filter(bite => {
                        const parsedBiteDate = Date.parse(bite.biteDate) || Date.parse(bite.endDateRange);
                        const now = Date.now();
                        console.log("parsedBiteDate:", parsedBiteDate, "now:", now);
                        return parsedBiteDate > now;
                      })
                      .map((bite, i) => {
                        return <BitePaper key={i} isBooked={bite.isBooked} restaurant={bite.restaurant} otherParty={bite.otherParty} biteId={bite._id} />
                      }) 
                      : <BitePaper isBooked={false} restaurant={"Epic Burger"} otherParty={null} city={"Chicago"} biteId={"bite._id"} />
                  }
                </Col>
              </Row>
            </Grid>
          </Tab>
          <Tab label="Booked" value="b">
            <Grid>
              <Row>
                <Col xs={12} md={12}>
                  <h2>All Booked Bites</h2>

                  {/** if there are bites, go through them and make papers for each of them */}
                  {this.state.myBites ? this.state.myBites
                    .filter(bite => bite.isBooked)
                    .map((bite, i) => {
                      return <BitePaper key={i} isBooked={bite.isBooked} restaurant={bite.restaurant} otherParty={bite.otherParty} biteId={bite._id} />;
                    }) 
                    : <BitePaper isBooked={false} restaurant={"Epic Burger"} otherParty={null} city={"Chicago"} biteId={"bite._id"} />
                  }
                </Col>
              </Row>
            </Grid>
          </Tab>
          <Tab label="Pending" value="c">
            <Grid>
              <Row>
                <Col xs={12} md={12}>
                  <h2>All Pending Bites</h2>

                  {/** if there are bites, go through them and make papers for each of them */}
                  {this.state.myBites ? this.state.myBites
                    .filter(bite => !bite.isBooked)
                    .map((bite, i) => {
                      return <BitePaper key={i} isBooked={bite.isBooked} restaurant={bite.restaurant} otherParty={bite.otherParty} biteId={bite._id} />;
                    }) 
                    : <BitePaper isBooked={false} restaurant={"Epic Burger"} otherParty={null} city={"Chicago"} biteId={"bite._id"} />
                  }
                </Col>
              </Row>
            </Grid>
          </Tab>
          <Tab label="Past Bites" value="d">
            <Grid>
              <Row>
                <Col xs={12} md={12}>
                  <h2>All Past Bites</h2>

                  {/** if there are bites, go through them and make papers for each of them */}
                  {this.state.myBites ? this.state.myBites
                    .filter(bite => {
                      const parsedBiteDate = Date.parse(bite.biteDate) || Date.parse(bite.endDateRange);
                      const now = Date.now();
                      console.log("parsedBiteDate:", parsedBiteDate, "now:", now);
                      return parsedBiteDate < now;
                    })
                    .map((bite, i) => {
                      return <BitePaper key={i} isBooked={bite.isBooked} restaurant={bite.restaurant} otherParty={bite.otherParty} biteId={bite._id} />;
                    }) 
                    : <BitePaper isBooked={false} restaurant={"Epic Burger"} otherParty={null} city={"Chicago"} biteId={"bite._id"} />
                  }
                </Col>
              </Row>
            </Grid>
          </Tab>
        </Tabs>
      </MuiThemeProvider>;
  }
}
