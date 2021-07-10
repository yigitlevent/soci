import { useState } from "react";
import styled from "styled-components";

import { Clients } from "./sidebar/Clients";
import { Logo } from "./sidebar/Logo";
import { Menu } from "./sidebar/Menu";

const SidebarWrapper = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: 66px 208px;
	grid-template-rows: 51px 1fr;
`;

export function Sidebar(): JSX.Element {
	const [selectedClient] = useState("Client #3");

	return (
		<SidebarWrapper>
			<Logo />
			<Clients selectedClient={selectedClient} />
			<Menu notifications={29} />
		</SidebarWrapper>
	);
}
