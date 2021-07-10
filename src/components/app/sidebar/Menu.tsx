import { useCallback, useState } from "react";
import styled from "styled-components";

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

const SubmenuList = styled.ul`
	max-height: 0;
	transition-duration: 0.5s;
	transition-property: max-height;

	background: ${(props: soci.theme.StyleProps) => props.theme.menu.submenuBackground};
	margin: 0;

	& > li {
		height: 52px; 
    	z-index: 1;

		opacity: 0;
		transform: translateY(-1rem);
		transition-timing-function: ease;
		transition-duration: 0.5s;
		transition-property: opacity, transform;

		& > a {
			text-decoration: none;
			color: ${(props: soci.theme.StyleProps) => props.theme.menu.color};

			&:visited {
				color: ${(props: soci.theme.StyleProps) => props.theme.menu.color} !important;
			}
		}
	}
	
	&.open{
		max-height: 100rem;
		transition-timing-function: ease;
		transition-duration: 0.5s;
		transition-property: max-height;

		& > li {
			background: ${(props: soci.theme.StyleProps) => props.theme.menu.submenuBackground};
			z-index: 2;

			opacity: 1;
			transform: translateY(0);
			transition-timing-function: ease;
			transition-duration: 0.5s;
			transition-property: opacity, transform;

			cursor: pointer;

			height: max-content;
			padding: 14px 0 12px 10px;

			&:last-child {
				margin-bottom: 14px;
			}

			&:hover {
				filter: brightness(110%);
			}

			& > a.open {
				text-decoration: none;
				color: ${(props: soci.theme.StyleProps) => props.theme.menu.selectedColor};

				&:visited {
					color: ${(props: soci.theme.StyleProps) => props.theme.menu.selectedColor} !important;
				}
			}
		}
	}
`;

export function Menu({ notifications }: { notifications: number; }): JSX.Element {
	const [menus] = useState([
		{
			name: "Summary",
			submenus: [
				{ name: "Summary #1", link: "#" },
				{ name: "Summary #2", link: "#" },
				{ name: "Summary #3", link: "#" }
			]
		},
		{
			name: "Publish",
			submenus: [
				{ name: "Compose", link: "#" },
				{ name: "Feed", link: "#" }
			]
		},
		{
			name: "Engage",
			submenus: [
				{ name: "Engage #1", link: "#" },
				{ name: "Engage #2", link: "#" },
				{ name: "Engage #3", link: "#" }
			]
		},
		{
			name: "Listen",
			submenus: [
				{ name: "Listen #1", link: "#" },
				{ name: "Listen #2", link: "#" }
			]
		},
		{
			name: "Report",
			submenus: [
				{ name: "Report #1", link: "#" },
				{ name: "Report #2", link: "#" },
				{ name: "Report #3", link: "#" },
				{ name: "Report #4", link: "#" }
			]
		}
	]);

	const [openMenu, setOpenMenu] = useState("Publish");
	const [openSubmenu, setOpenSubmenu] = useState("Feed");

	const getSubmenuElements = useCallback((submenus: any[]): JSX.Element[] => {
		return submenus.map((submenu, index) => {
			const isOpen = (openSubmenu === submenu.name);

			return (
				<li key={`${submenu.name} ${index}`} onClick={() => setOpenSubmenu(submenu.name)}>
					<a href={submenu.link} className={isOpen ? "open" : ""}>{submenu.name}</a>
				</li>
			);
		});
	}, [openSubmenu]);

	const menuElements = menus.map((menu, index) => {
		const isOpen = (openMenu === menu.name);

		return (
			<MenuWrapper key={`${menu.name} ${index}`} onClick={() => setOpenMenu(menu.name)}>
				<MenuTop open={isOpen}>
					<MenuIcon src={`./assets/icons/menu_${menu.name.toLowerCase()}.svg`} />
					<MenuTitle>{menu.name}</MenuTitle>
					<MenuStatus src={"./assets/icons/plus.svg"} />
				</MenuTop>

				{isOpen ? <DownArrow /> : null}

				<SubmenuList className={isOpen ? "open" : ""}>{getSubmenuElements(menu.submenus)}</SubmenuList>
			</MenuWrapper >
		);
	});

	return (
		<MenuListWrapper>

			<MenuWrapper onClick={() => { /* */ }}>
				<MenuTop open={(openMenu === "Notifications")}>
					<MenuIcon src={"./assets/icons/menu_notifications.svg"} />
					<MenuTitle>Notifications</MenuTitle>
					<MenuNotification>{notifications}</MenuNotification>
				</MenuTop>
			</MenuWrapper>

			{menuElements}

		</MenuListWrapper>
	);
}
