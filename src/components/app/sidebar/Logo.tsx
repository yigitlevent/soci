import styled from "styled-components";

const LogoWrapper = styled.a`
	height: 100%;
	width: 100%;

	background: ${(props: soci.theme.StyleProps) => props.theme.logo.background};
	grid-column: span 2;
`;

const LogoImage = styled.img`
	height: 56%;
	width: 56%;
	margin: 12px auto;
	display: block;
`;

export function Logo(): JSX.Element {
	return (
		<LogoWrapper href={"#"}>
			<LogoImage src={"./assets/logo.svg"} />
		</LogoWrapper>
	);
}
