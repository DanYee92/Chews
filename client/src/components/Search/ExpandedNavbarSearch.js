import React from "react";
import { Navbar, FormGroup, FormControl } from "react-bootstrap";
import Button from "../Button";

export const ExpandedNavbarSearch = props => {
	return (
		<Navbar.Form pullLeft>
			<form onSubmit={props.handleSearchSubmit}>
				<FormGroup>
					<FormControl
						name="navbarSearchQuery"
						type="text"
						placeholder="Search"
						onChange={props.handleInputChange}
						value={props.navbarSearchQuery}
					/>
				</FormGroup>{" "}
				<Button type="submit" primary>
					Submit
				</Button>
			</form>
		</Navbar.Form>
	);
};
