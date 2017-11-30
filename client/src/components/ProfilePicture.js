import React from "react";
// import styled from "styled-components";
// import Container from "./Container";
import ProfileImage from "./ProfileImage";

const ProfilePicture = props => {
	return (
		<div>
			<ProfileImage src={props.src} {...props} />
		</div>
	);
};

export default ProfilePicture;
