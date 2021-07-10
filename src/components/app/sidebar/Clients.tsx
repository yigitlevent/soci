import { useState } from "react";
import styled from "styled-components";

import { NotificationsCircle } from "./clients/NotificationsCircle";

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

	background: ${(props: soci.theme.StyleProps) => props.theme.client.selectedBackground};

	float: left;
	margin: 0px 0px 0px -19px;
	border-radius: 9px;
`;

export function Clients({ selectedClient }: { selectedClient: string; }): JSX.Element {
	const [clientsList] = useState([
		{ name: "Client #0", image: "Client0.png", notifications: 0 },
		{ name: "Client #1", image: "Client1.png", notifications: 99 },
		{ name: "Client #2", image: "Client2.png", notifications: 0 },
		{ name: "Client #3", image: "Client3.png", notifications: 29 },
		{ name: "Client #4", image: "Client4.png", notifications: 0 },
		{ name: "Client #5", image: "Client5.png", notifications: 0 }
	]);

	const makeClientIcons = clientsList.map((client, index) => {
		const isSelected = (client.name === selectedClient);

		return (
			<ClientIconWrapper key={`${client.name} ${index}`}>
				{isSelected ? <ClientSelectedBar /> : null}

				{(client.notifications > 0) && !isSelected ? <NotificationsCircle amount={client.notifications} /> : null}

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
			{(clientsList.length > 0) ? makeClientIcons : null}
		</ClientsWrapper>
	);
}
