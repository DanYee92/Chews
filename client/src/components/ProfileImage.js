import styled from "styled-components";

const ProfileImage = styled.img`
	width: ${props => (props.small ? "3em" : "18em")};
	height: auto;
	border-radius: 50%;
	border: 2px solid tomato;
`;

export default ProfileImage;
