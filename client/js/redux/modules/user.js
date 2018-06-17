import Cookies from 'js-cookie'
import {
  fetchUser,
  logoutUser,
  addFavoriteTrail,
  removeFavoriteTrail,
} from '../../utils/api'

const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE'


function fetchingUser() {
  return {
    type: FETCHING_USER,
  }
}

function fetchingUserSuccess(googleID, favorites) {
  return {
    type: FETCHING_USER_SUCCESS,
    googleID,
    favorites,
  }
}

function fetchingUserFailure(error) {
  return {
    type: FETCHING_USER_FAILURE,
    error,
  }
}

export function fetchAndHandleUser() {
  return function (dispatch) {
    dispatch(fetchingUser())
    fetchUser().then(response => {
      const googleID = response.data.googleID
      const favorites = response.data.favorites
      dispatch(fetchingUserSuccess(googleID, favorites))
    }).catch(error => {
      dispatch(fetchingUserFailure(error))
    })
  }
}

export function addFavorite(props) {
  return function (dispatch) {
    addFavoriteTrail(props).then(response => {
      const googleID = response.data.googleID
      const favorites = response.data.favorites
      dispatch(fetchingUserSuccess(googleID, favorites))
    }).catch(error => {
      dispatch(fetchingUserFailure(error))
    })
  }
}

export function removeFavorite(props) {
  return function (dispatch) {
    removeFavoriteTrail(props).then(response => {
      const googleID = response.data.googleID
      const favorites = response.data.favorites
      dispatch(fetchingUserSuccess(googleID, favorites))
    }).catch(error => {
      dispatch(fetchingUserFailure(error))
    })
  }
}

function logoutUserSuccess() {
  return {
    type: LOGOUT_USER_SUCCESS,
  }
}

function logoutUserFailure(error) {
  return {
    type: LOGOUT_USER_FAILURE,
    error,
  }
}

export function logout() {
  return function (dispatch) {
    logoutUser().then(response => {
      Cookies.remove('accessToken')
      window.location = "/"
      dispatch(logoutUserSuccess())
    }).catch(error => {
      dispatch(logoutUserFailure())
    })
  }
}

const initialState = {
	favorites: [],
  googleID: null,
  isFetching: false,
  error: '',
}

export default function user(state = initialState, action) {
	switch (action.type) {
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        googleID: action.googleID,
        favorites: action.favorites,
      }
		case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case LOGOUT_USER_SUCCESS:
      return initialState
    case LOGOUT_USER_FAILURE:
    return {
      ...state,
      error: action.error,
      favorites: [],
      googleID: null,
    }
    default:
      return state
	}
}
