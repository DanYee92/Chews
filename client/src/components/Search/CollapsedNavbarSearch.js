import React from "react";
import { Navbar, FormGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";
import { SearchIcon } from ".";

const SearchContainer = styled.div`
	float: right;
	font-size: 1.25em;
`;

const MyNavbarForm = styled(Navbar.Form)`
	border: none;
	position: absolute;
	float: left;
	right: 3.5em;
	padding: 0;
	margin-top: 0.5em;
`;

export const CollapsedNavbarSearch = props => {
	return (
		<SearchContainer>
			<SearchIcon
				icon={props.searchBarVisible}
				onClick={props.handleSearchIconClick}
			/>
			{props.searchBarVisible ? (
				<MyNavbarForm pullLeft>
					<form onSubmit={props.handleSearchSubmit}>
						<FormGroup>
							<FormControl
								name="navbarSearchQuery"
								type="text"
								placeholder="Search"
								onChange={props.handleInputChange}
								value={props.navbarSearchQuery}
							/>
						</FormGroup>
					</form>
				</MyNavbarForm>
			) : (
				""
			)}
		</SearchContainer>
	);
};
