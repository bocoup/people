import React from "react"; // eslint-disable-line no-unused-vars
import { render } from "react-dom";
import { Router, Route, IndexRoute } from "react-router";
import { createHistory } from "history";
import App from "./components/App";
import List from "./components/List";
import Profile from "./components/Profile";
import NoMatch from "./components/NoMatch";

render( (
	<Router history={ createHistory() }>
		<Route path="/" component={ App }>
			<IndexRoute component={ List } />
			<Route path="profile/:id" component={ Profile } />
			<Route path="*" component={ NoMatch } />
		</Route>
	</Router>
), document.querySelector( "#app" ) );
