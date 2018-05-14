var actions = require('./actions');

var initialState = {
	trails: [],
	favorites: [],
	googleID: null
};

var reducer = function(state, action) {
	state = state || initialState;
	switch (action.type) {
		
		case actions.FETCH_USER_SUCCESS:
			var user = action.user;
			var newState = Object.assign({}, state, {
				favorites: user.favorites,
				googleID: user.googleID
			});
			return newState;
		
		case actions.FETCH_USER_ERROR:
			return state;
		
		case actions.GET_TRAILS_SUCCESS:
			var trails = action.trails;
			var newState = Object.assign({}, state, {
				trails: trails,
			});
			return newState;

		case actions.GET_TRAILS_ERROR:
			return state;

		case actions.LOGOUT_USER_SUCCESS:
			return initialState
	
	}
	return state;	
};


exports.reducer = reducer;