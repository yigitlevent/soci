import styled from "styled-components";

const LogoWrapper = styled.img`
	height: 100%;
	width: 100%;
`;

export function Logo(): JSX.Element {

	return (
		<LogoWrapper>
			<a href={"#"}>
				<img src={"./assets/logo.svg"} />
			</a>
		</LogoWrapper>
	);

}