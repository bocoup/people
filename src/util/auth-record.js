const authRecord = {
	set: ( { token, uid } ) => {
		localStorage.setItem( "token", token );
		localStorage.setItem( "uid", uid );
	},
	clear: () => {
		localStorage.removeItem( "token" );
		localStorage.removeItem( "uid" );
	},
	get: () => ( {
		token: localStorage.getItem( "token" ),
		uid: localStorage.getItem( "uid" )
	} )
};

export default authRecord;
