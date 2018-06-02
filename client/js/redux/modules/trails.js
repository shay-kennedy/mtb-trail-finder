import { fetchTrails } from '../../helpers/api'

const FETCHING_TRAILS = 'FETCHING_TRAILS'
const FETCHING_TRAILS_SUCCESS = 'FETCHING_TRAILS_SUCCESS'
const FETCHING_TRAILS_FAILURE = 'FETCHING_TRAILS_FAILURE'


function fetchingTrails() {
  return {
    type: FETCHING_TRAILS,
  }
}

function fetchingTrailsSuccess(trails) {
  return {
    type: FETCHING_TRAILS_SUCCESS,
    trails,
  }
}

function fetchingTrailsFailure(error) {
  return {
    type: FETCHING_TRAILS_FAILURE,
    error,
  }
}

export function fetchAndHandleTrails(city, state) {
  return function (dispatch) {
    dispatch(fetchingTrails())
    fetchTrails(city, state).then(response => {
      dispatch(fetchingTrailsSuccess(response.data))
    }).catch(error => {
      dispatch(fetchingTrailsFailure(error))
    })
  }
}

const initialState = {
	trails: [],
  isFetching: false,
  error: '',
}

export default function trails(state = initialState, action) {
	switch (action.type) {
    case FETCHING_TRAILS:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_TRAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        trails: action.trails,
      }
		case FETCHING_TRAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state
	}
}
