import React from "react"; // eslint-disable-line no-unused-vars
import { render } from "react-dom";
import { Router, Route, IndexRoute, Redirect } from "react-router";
import { createHistory } from "history";
import App from "./components/app";
import List from "./components/list";
import Profile from "./components/profile";
import NoMatch from "./components/no-match";
import auth from './auth';

render( (
	<Router history={ createHistory() }>
		<Route path="/" component={ App }>
			<IndexRoute component={ List } onEnter={ auth.requireNoAuth } />
			<Route path="profile/:slug" component={ Profile } onEnter={ auth.requireNoAuth } />
			<Redirect from="profile" to="/" />
			<Route path="*" component={ NoMatch } />
		</Route>
	</Router>
), document.querySelector( "#app" ) );
