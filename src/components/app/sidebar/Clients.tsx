import { useContext } from "react";
import styled from "styled-components";

import { ClientsList } from "../../../data/ClientsList";

import { MainContext } from "../../App";

import { Circle } from "./clients/Circle";

const ClientsWrapper = styled.div`
	height: 100%;
	width: 100%;

	background: ${(props: soci.theme.StyleProps) => props.theme.client.background};
`;

const ClientIconWrapper = styled.div`
	width: 100%;
	padding: 8px;

	padding: 9px 14px 4px 14px;

	& > a {
		display: block;
		width: 37px;
		height: 37px;
	}
`;

const ClientIcon = styled.img`
    height: 100%;
    width: 100%;
    display: block;
    margin: 0 auto;

    border-radius: 7px;

	filter: brightness(25%);

	&.selected {
		filter: brightness(100%);
	}
`;

const ClientSelectedBar = styled.div`
	height: 36px;
	width: 10px;

	background: ${(props: soci.theme.StyleProps) => props.theme.menu.selectedBackground};

	float: left;
	margin: 0px 0px 0px -19px;
	border-radius: 9px;
`;

export function Clients(): JSX.Element {
	const { currentClient } = useContext(MainContext);

	const makeClientIcons = ClientsList.map((client, index) => {
		const isSelected = (currentClient === client.name);

		return (
			<ClientIconWrapper key={index}>
				{isSelected ? <ClientSelectedBar /> : null}

				{(client.notifications > 0) && !isSelected ? <Circle amount={client.notifications} /> : null}

				<a href={"/#"}>
					<ClientIcon
						src={`./assets/mock/${client.image}`}
						title={client.name}
						className={isSelected ? "selected" : ""}
					/>
				</a>
			</ClientIconWrapper>
		);
	});

	return (
		<ClientsWrapper>
			{(ClientsList.length > 0) ? makeClientIcons : null}
		</ClientsWrapper>
	);
}
