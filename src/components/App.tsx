import styled from "styled-components";

import { Menu } from "./menu/Menu";
import { Body } from "./body/Body";

const AppWrapper = styled.div`
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;

	background: ${(props: soci.theme.StyleProps) => props.theme.app.background};
	color: ${(props: soci.theme.StyleProps) => props.theme.app.color};

	display: grid;
	grid-template-columns: 274px 1fr;
	grid-template-rows: 1fr;
`;

export function App(): JSX.Element {

	return (
		<AppWrapper>
			<Menu />
			<Body />
		</AppWrapper>
	);
}