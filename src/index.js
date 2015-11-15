import React from "react"; // eslint-disable-line no-unused-vars
import { render } from "react-dom";
import { Router, Route } from "react-router";
import { createHistory } from "history";
import App from "./components/App";
import About from "./components/About";
import NoMatch from "./components/NoMatch";

render( (
	<Router history={ createHistory() }>
		<Route path="/" component={ App }>
			<Route path="about" component={ About } />
			<Route path="*" component={ NoMatch } />
		</Route>
	</Router>
), document.querySelector( "#app" ) );
