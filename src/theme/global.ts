import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	@font-face {
        font-family: "Raleway-Medium";
        src: url("/assets/fonts/Raleway-Medium.ttf");
		font-display: block;
    };

	@font-face {
        font-family: "Raleway-Bold";
        src: url("/assets/fonts/Raleway-Bold.ttf");
		font-display: block;
    };
	
	@font-face {
        font-family: "BarlowSC-Regular";
        src: url("/assets/fonts/BarlowSemiCondensed-Regular.ttf");
		font-display: block;
    };

	* {
		box-sizing: border-box;
		tab-size: 4;

		font-kerning: auto;
		font-size: 14px;
		letter-spacing: -0.1px;
		word-spacing: normal;

		font-family: "Raleway-Medium";
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
