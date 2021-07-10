import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	@font-face {
        font-family: ${(props: soci.theme.StyleProps) => props.regularFont};
        src: ${(props: soci.theme.StyleProps) => `url("/assets/fonts/${props.regularFont}.ttf")`};
		font-display: block;
    };

	* {
		box-sizing: border-box;
		tab-size: 4;

		font-kerning: auto;
		font-size: 1.00em;
		letter-spacing: -0.1px;
		word-spacing: normal;

		font-family: ${(props: soci.theme.StyleProps) => props.regularFont};
	}

	html {
		height: 100vh;
		width: 100vw;
	}

	body, 
	#root {
		height: 100%;
		width: 100%;
	}

	html,
	body,
	#root {
		margin: 0;
		padding: 0;
	}
`;
