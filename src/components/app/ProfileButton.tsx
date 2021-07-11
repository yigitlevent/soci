import styled from "styled-components";

const ProfileButtonWrapper = styled.div`
	width: 60px;
	height: 60px;

	position: absolute;
	right: 70px;
	top: 30px;

	border-radius: 50%;

	cursor: pointer;
`;

const ProfileImage = styled.img`
	height: 100%;
	width: 100%;

	border-radius: 50%;
`;

export function ProfileButton(): JSX.Element {
	return (
		<ProfileButtonWrapper>
			<ProfileImage src="./assets/mock/ProfilePicture.png" />
		</ProfileButtonWrapper>
	);
}
