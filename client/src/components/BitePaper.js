import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import Button from "../components/Button";


const paperStyles = {
  width: "100%",
  height: "10em",
  background: "white",
  margin: "1em 0",
  position: "relative"
};
const BiteBody = styled.span`
  color: black;
  position: absolute;
  left: 10em;
  width: 15em;
`;
const BookedStatusIcon = styled.i`
  padding: 0.5em;
  margin: 0.3em;
	border: 3px solid;
	border-color: ${props => (props.isBooked ? "green" : "orange")};
  border-radius: 50%;
  font-size: 3.5em;
  color: ${props => (props.isBooked ? "green" : "orange")};
`;
const SeeMoreButton = Button.extend`
	content: "See Details";
  background: transparent;
  position: absolute;
  bottom: 2em;
  right: 2em;
`;

// BitePaper takes ({isBooked, restaurant, otherParty, biteId})
export const BitePaper = ({ isBooked, restaurant, otherParty, city, biteId }) => {
    return (
			<Paper  
				style={paperStyles} 
				children={
					<div>               
						<BookedStatusIcon 
							isBooked={isBooked}
							className={isBooked ? `fa fa-check` : `fa fa-hourglass-o`} 
						/>
						<BiteBody>
							<h3>{restaurant}</h3>
							{/**
								* if there is another party, display their name, else display nobody
								* this needs to be refactored a bit
								*/}
							<h4>
								with
								{otherParty ? `${otherParty.firstName} ${otherParty.lastName}` : "nobody yet"}
							</h4>
							<i className="fa fa-map-marker" aria-hidden="true" style={{ marginRight: "0.5em" }} />
							{city}
							{/** insert bite date formatting here */}
						</BiteBody>
						<Link to={`/bite/detail/${biteId}`}>
							<SeeMoreButton primary>
								<span>
									<i class="fa fa-list" aria-hidden="true" />
								</span>
								
							</SeeMoreButton>
						</Link>
					</div>
				} 
			/>);
};