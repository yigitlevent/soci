import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./theme/global";
import { MainTheme } from "./theme/_themes";

import { App } from "./components/App";

ReactDOM.render(
	<StrictMode>
		<ThemeProvider theme={MainTheme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</StrictMode >,
	document.getElementById("root")
);
