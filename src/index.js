import React from "react"; // eslint-disable-line no-unused-vars
import { render } from "react-dom";
import { Router, Route, IndexRoute, Redirect } from "react-router";
import { createHistory } from "history";
import App from "./components/app";
import List from "./components/list";
import Profile from "./components/profile";
import NoMatch from "./components/no-match";
import auth from "./util/auth";

const Login = ( { location: { state } } ) => {
	const redirectTo = state && state.nextPathname;
	return (
		<div>
			<p>You must log in to use this app!</p>
			<a href={auth.authUrl( redirectTo )}>Log In</a>
		</div>
	);
};

render( (
	<Router history={ createHistory() }>
		<Route path="/login" component={ Login } onEnter={ auth.requireAuth } />
		<Route path="/" component={ App } onEnter={ auth.requireAuth }>
			<IndexRoute component={ List } />
			<Route path="profile/:slug" component={ Profile } />
			<Redirect from="profile" to="/" />
			<Route path="*" component={ NoMatch } />
		</Route>
	</Router>
), document.querySelector( "#app" ) );
