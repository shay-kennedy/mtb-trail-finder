import actions from './actions'

const initialState = {
	trails: [],
	favorites: [],
	googleID: null
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case actions.FETCH_USER_SUCCESS:
			var user = action.user;
			var newState = Object.assign({}, state, {
				favorites: user.favorites,
				googleID: user.googleID
			})
			return newState;
		
		case actions.FETCH_USER_ERROR:
			return state;
		
		case actions.GET_TRAILS_SUCCESS:
			var trails = action.trails;
			var newState = Object.assign({}, state, {
				trails: trails,
			})
			return newState;

		case actions.GET_TRAILS_ERROR:
			return state;

		case actions.LOGOUT_USER_SUCCESS:
			return initialState
	}
	return state;	
}
