import React from "react";
import ReactDOM from "react-dom";
import { AdminContext } from "react-admin";
import { DataProvider, AuthProvider } from "./security";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<AdminContext authProvider={AuthProvider} dataProvider={DataProvider} >
			<App />
		</AdminContext>
	</React.StrictMode>,
	document.getElementById("root")
);

