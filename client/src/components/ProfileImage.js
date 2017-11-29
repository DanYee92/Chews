import styled from "styled-components";

const ProfileImage = styled.img`
	width: ${props => (props.small ? "75px" : "200px")};
	height: auto;
	border-radius: 50%;
	border: 2px solid tomato;
`;

export default ProfileImage;
