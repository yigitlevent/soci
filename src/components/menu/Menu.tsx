import styled from "styled-components";

import { Logo } from "./Logo";

const MenuWrapper = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: 66px 208px;
	grid-template-rows: 52px 1fr;
`;

export function Menu(): JSX.Element {


	return (
		<MenuWrapper>
			<Logo />


		</MenuWrapper>
	);
}