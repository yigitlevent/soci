import { useContext } from "react";
import styled from "styled-components";

import { MenusList } from "../../../data/MenusList";

import { MainContext } from "../../App";

import { Submenu } from "./menu/Submenu";

const MenuListWrapper = styled.div`
	height: 100%;
	width: 100%;

	background: ${(props: soci.theme.StyleProps) => props.theme.menu.background};
`;

const MenuWrapper = styled.div`
	min-height: 52px;
	width: 100%;

	background: ${(props: soci.theme.StyleProps) => props.theme.menu.submenuBackground};
	color: ${(props: soci.theme.StyleProps) => props.theme.menu.color};
	
	font-size: 1em;
	font-family: "Raleway-Medium";

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 52px auto;
`;

const MenuTop = styled.div<{ open: boolean; }>`
	background: ${p => p.open
		? (props: soci.theme.StyleProps) => props.theme.menu.selectedBackground
		: (props: soci.theme.StyleProps) => props.theme.menu.background};

	height: 52px;

	display: grid;
	grid-template-columns: 24px 1fr 24px;
	grid-template-rows: 52px;

	z-index: 2;

	cursor: pointer;
	padding: 0 14px 0 17px;

	&:hover {
		filter: brightness(110%);
	}
`;

const DownArrow = styled.div`
	margin-left: 23px;
	width: 0; 
	height: 0; 
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-top: 6px solid ${(props: soci.theme.StyleProps) => props.theme.menu.selectedBackground};
`;

const MenuIcon = styled.img`
	height: 24px;
	width: 24px;
	justify-self: center;
	align-self: center;
`;

const MenuTitle = styled.a`
	height: max-content;
	padding-left: 8px;
	align-self: center;
	text-transform: uppercase;

	text-decoration: none;
	color: ${(props: soci.theme.StyleProps) => props.theme.menu.color};

	&:visited {
		color: ${(props: soci.theme.StyleProps) => props.theme.menu.color} !important;
	}
`;

const MenuStatus = styled.img`
	height: 20px;
	width: 20px;
	justify-self: center;
	align-self: center;
`;

const MenuNotification = styled.div`
	height: max-content;
	width: max-content;
	font-family: "BarlowSC-Regular";
	border: ${(props: soci.theme.StyleProps) => props.theme.menu.notification};
	padding: 1px 5px 2px;
	border-radius: 4px;
	justify-self: center;
	align-self: center;
`;

export function Menu({ notifications }: soci.props.Menu): JSX.Element {
	const { currentMenu, setCurrentMenu } = useContext(MainContext);

	const menuElements = MenusList.map((menu, index) => {
		const isMenuOpen = (currentMenu === menu.name);
		return (
			<MenuWrapper key={index} onClick={() => setCurrentMenu(menu.name)}>
				<MenuTop open={isMenuOpen}>
					<MenuIcon src={`./assets/icons/menu_${menu.name.toLowerCase()}.svg`} />
					<MenuTitle>{menu.name}</MenuTitle>
					<MenuStatus src={isMenuOpen ? "./assets/icons/minus.svg" : "./assets/icons/plus.svg"} />
				</MenuTop>

				{isMenuOpen ? <DownArrow /> : null}

				<Submenu isMenuOpen={isMenuOpen} submenus={menu.submenus} />
			</MenuWrapper >
		);
	});

	return (
		<MenuListWrapper>

			<MenuWrapper onClick={() => setCurrentMenu("Notifications")}>
				<MenuTop open={(currentMenu === "Notifications")}>
					<MenuIcon src={"./assets/icons/menu_notifications.svg"} />
					<MenuTitle>Notifications</MenuTitle>
					<MenuNotification>{notifications}</MenuNotification>
				</MenuTop>
			</MenuWrapper>

			{menuElements}

		</MenuListWrapper>
	);
}
