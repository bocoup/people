/**
* @file Auth service, provider-specific authentication
* @module service/auth
* @see Auth
*/

import queryString from "query-string";
import { browserHistory } from "react-router";
import Auth from "react-router-oauth";
import { API_AUTH_URL } from "../config";

// A few app defaults.
const loginRoute = "/login";
const loggedInRoute = "/";

// Not actually used by the auth system, but it's related.
function authUrl( redirectTo ) {
	const provider = "github";
	const referer = `${location.protocol}//${location.host}${redirectTo || "/"}`;
	const search = queryString.stringify( { provider, referer } );
	return `${API_AUTH_URL}?${search}`;
}

// If auth is required for the current route, but the user is not already
// authed, this function will be called. If it returns an object, that object
// will be used to log the user in.
function parseCredentials() {

	// Get auth params from the query string.
	const params = queryString.parse( location.search );
	const { access_token: token, id } = params;
	if ( token && id ) {

		// Remove related params from the query object.
		delete params.access_token;
		delete params.id;

		// Replace the current page with the same page, minus the auth query params.
		replacePage( params );

		// The returned object will be used to login.
		return { token, id };
	}
}

function replacePage( params ) {

	// Replace the current page with the same page
	let search = queryString.stringify( params );
	if ( search ) { search = `?${search}`; }
	history.replaceState( "", {}, `${location.pathname}${search}` );
}

export default new Auth( {
	browserHistory,
	loginRoute,
	loggedInRoute,
	authUrl,
	parseCredentials
} );
