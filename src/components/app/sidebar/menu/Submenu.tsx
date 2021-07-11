import { useContext } from "react";
import styled from "styled-components";

import { MainContext } from "../../../App";

const SubmenuList = styled.ul<{ isMenuOpen: boolean; }>`
	background: ${(props: soci.theme.StyleProps) => props.theme.menu.submenuBackground};
	margin: 0;

	max-height: ${p => p.isMenuOpen ? "100rem" : "0"};
		
	transition-timing-function: ease-in;
	transition-duration: 0.6s;
	transition-property: max-height;
`;

const SubmenuItem = styled.li<{ isMenuOpen: boolean; }>`
	background: ${(props: soci.theme.StyleProps) => props.theme.menu.submenuBackground};
	cursor: pointer;
	margin: 0;

	padding: 14px 0 12px 10px;
	
	height: ${p => p.isMenuOpen ? "max-content" : "52px"};
	opacity: ${p => p.isMenuOpen ? "1" : "0"};
	transform: translateY(${p => p.isMenuOpen ? "0" : "-1rem"});

	transition-timing-function: ease-in;
	transition-duration: 0.4s;
	transition-property: opacity, transform;
	
	&:last-child {
		margin-bottom: 14px;
	}

	&:hover {
		filter: brightness(110%);
	}
`;

const SubmenuItemLink = styled.a<{ isSubmenuOpen: boolean; }>`
	text-decoration: none;

	color: ${p => p.isSubmenuOpen
		? (props: soci.theme.StyleProps) => props.theme.menu.selectedColor
		: (props: soci.theme.StyleProps) => props.theme.menu.color};

	&:visited {
		color: ${p => p.isSubmenuOpen
		? (props: soci.theme.StyleProps) => props.theme.menu.selectedColor
		: (props: soci.theme.StyleProps) => props.theme.menu.color} !important;
	}
`;

export function Submenu({ isMenuOpen, submenus }: soci.props.Submenu): JSX.Element {
	const { currentSubmenu, setCurrentSubmenu } = useContext(MainContext);

	const getSubmenuElements = submenus.map((submenu, index) => {
		const isSubmenuOpen = (currentSubmenu === submenu.name);

		return (
			<SubmenuItem key={index} isMenuOpen={isMenuOpen} onClick={() => setCurrentSubmenu(submenu.name)}>
				<SubmenuItemLink href={submenu.link} isSubmenuOpen={isSubmenuOpen}>{submenu.name}</SubmenuItemLink>
			</SubmenuItem>
		);
	});

	return <SubmenuList isMenuOpen={isMenuOpen}>{getSubmenuElements}</SubmenuList>;
}
