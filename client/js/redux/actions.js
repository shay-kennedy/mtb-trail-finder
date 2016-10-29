require('isomorphic-fetch');
var Cookies = require("js-cookie");


var FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
var fetchUserSuccess = function(user) {
  return {
    type: FETCH_USER_SUCCESS,
    user: user
  };
};

var FETCH_USER_ERROR = 'FETCH_USER_ERROR';
var fetchUserError = function(error) {
  return {
    type: FETCH_USER_ERROR,
    error: error
  };
};

var GET_TRAILS_SUCCESS = 'GET_TRAILS_SUCCESS';
var getTrailsSuccess = function(trails) {
  return {
    type: GET_TRAILS_SUCCESS,
    trails: trails
  };
};

var GET_TRAILS_ERROR = 'GET_TRAILS_ERROR';
var getTrailsError = function(error) {
  return {
    type: GET_TRAILS_ERROR,
    error: error
  };
};

// GET request for user info from DB with GoogleID and favorites
var fetchUser = function() {
  return function(dispatch) {
    var token = Cookies.get('accessToken');
  	var headers = new Headers({
  		Authorization: 'bearer ' + token
  	});
    var url = '/user';
    return fetch(url, {headers: headers}).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then(function(user) {
      return dispatch(
        fetchUserSuccess(user)
      );
    })
    .catch(function(error) {
      return dispatch(
        fetchUserError(error)
      );
    });
  }
};

// GET request trail info from the server-side API request based on city & state
var getTrails = function(city, state) {
  return function(dispatch) {
    var url = `/trails/${city}/${state}`;
    return fetch(url)
    .then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then(function(trails) {
      return dispatch(
        getTrailsSuccess(trails)
      );
    })
    .catch(function(error) {
      return dispatch(
        getTrailsError(error)
      );
    });
  }
};

// PUT request to add favorites to user schema 
var addFavorite = function(props) {
  return function(dispatch) {
    var token = Cookies.get('accessToken');
    var userId = props.userId;
    var url = `/user/${userId}`;
  return fetch(url,
  {
    method: 'put',
    headers: {'Content-type': 'application/json', 'Authorization': 'bearer ' + token},
    body: JSON.stringify({
      favorites: {
        'name': props.name,
        'city': props.city,
        'state': props.state,
        'url': props.url,
        'length': props.length,
        'description': props.description,
        'directions': props.directions,
        'trail_id': props.trail_id
      }
    })
  }
    ).then(function(response) {
      if(response.status < 200 || response.status > 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then(function(response) {
      return dispatch(
        fetchUserSuccess(response)
        );
    })
    .catch(function(error) {
      return dispatch(
        fetchUserError(error)
        );
    });
  }
};

// PUT request to remove favorites from user schema
var removeFavorite = function(props) {
  return function(dispatch) {
    var token = Cookies.get('accessToken');
    var trail_id = props.trail_id;
    var url = `/user/favorites/${trail_id}`;
  return fetch(url,
  {
    method: 'put',
    headers: {'Content-type': 'application/json', 'Authorization': 'bearer ' + token},
    body: JSON.stringify({
      'googleID': props.userId
    })
  }
    ).then(function(response) {
      if(response.status < 200 || response.status > 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then(function(user) {
      return dispatch(
        fetchUserSuccess(user)
        );
    })
    .catch(function(error) {
      return dispatch(
        fetchUserError(error)
        );
    });
  }
};

exports.fetchUser = fetchUser;
exports.fetchUserSuccess = fetchUserSuccess;
exports.fetchUserError = fetchUserError;
exports.FETCH_USER_SUCCESS = FETCH_USER_SUCCESS;
exports.FETCH_USER_ERROR = FETCH_USER_ERROR;
exports.getTrails = getTrails;
exports.getTrailsSuccess = getTrailsSuccess;
exports.getTrailsError = getTrailsError;
exports.GET_TRAILS_SUCCESS = GET_TRAILS_SUCCESS;
exports.GET_TRAILS_ERROR = GET_TRAILS_ERROR;
exports.addFavorite = addFavorite;
exports.removeFavorite = removeFavorite;
