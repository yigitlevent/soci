import styled from "styled-components";

const ActionsWrapper = styled.div`
	float: right;
`;

const MenuIcon = styled.img`
	width: 20px;
	height: 20px;
	cursor: pointer;
	filter: opacity(0.3);
	filter: brightness(70%);
`;

export function Actions({ status }: soci.props.Actions): JSX.Element {
	return (
		<ActionsWrapper>
			{(status === 0) ? <MenuIcon src="./assets/icons/action_approve.svg" title="Approve" /> : null}
			{(status === 1) ? <MenuIcon src="./assets/icons/action_unapprove.svg" title="Unapprove" /> : null}
			<MenuIcon src="./assets/icons/action_delete.svg" title="Delete" />
			<MenuIcon src="./assets/icons/action_menu.svg" title="Menu" />
		</ActionsWrapper>
	);
}
