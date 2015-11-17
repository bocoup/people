// Create config object using properties descriptors, by default they are
// not writable and not configurable (cannot be deleted). They also allow using
// get and set methods.
const config = Object.create( null, {
	roots: {
		value: {

			// Rename it to
			production: "https://api.bocoup.com/v3/",
			staging: "https://api-staging.bocoup.com/v3/",
			development: "http://api.loc/v3/",
			test: "http://localhost:8888/"
		}
	},

	/**
	 * Computes the current API root or base_url for the app
	 */
	API_ROOT: {
		get() {
			const root = this.roots[ APP_ENV ];

			if ( !root ) {
				throw new Error( `Unrecognized environment: '${ APP_ENV }'` );
			}

			return root;
		},
		set() {
			throw new Error( "Cannot set any value to config.API_ROOT" );
		}
	},

	authProvider: {
		get() {
			const authRoot = `${this.API_ROOT}auth/authenticate`;

			return `${authRoot}?provider=github&referer=${ location.origin }`;
		}
	}
} );

export default config;
