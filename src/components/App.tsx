import { createContext, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../theme/global";
import { MainTheme } from "../theme/_themes";

import { Sidebar } from "./app/Sidebar";
import { Body } from "./app/Body";
import { ProfileButton } from "./app/ProfileButton";

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

export const MainContext = createContext({} as soci.context.Main);

export function App(): JSX.Element {
	const [currentTheme, setCurrentTheme] = useState(MainTheme);
	const [currentClient, setCurrentClient] = useState("Client #3");
	const [currentMenu, setCurrentMenu] = useState("Publish");
	const [currentSubmenu, setCurrentSubmenu] = useState("Feed");
	const [currentPosts, setCurrentPosts] = useState<soci.data.Posts>({});

	return (
		<ThemeProvider theme={currentTheme}>
			<MainContext.Provider value={{
				currentTheme, currentClient, currentMenu, currentSubmenu, currentPosts,
				setCurrentTheme, setCurrentClient, setCurrentMenu, setCurrentSubmenu, setCurrentPosts
			}}>
				<GlobalStyle />

				<AppWrapper>
					<ProfileButton />
					<Sidebar />
					<Body />
				</AppWrapper>

			</MainContext.Provider>
		</ThemeProvider>
	);
}
