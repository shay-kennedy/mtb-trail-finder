import * as axios from 'axios'
import Cookies from 'js-cookie'


function api() {
  const apiClient = axios.create({
    baseURL: window.location.origin
  })
  const authtoken = Cookies.get('accessToken') || ''
  apiClient.defaults.headers.common['Authorization'] = `bearer ${authtoken}`
  apiClient.interceptors.response.use((response) => {
    return Promise.resolve(response)
  }, (error) => {
    if (error.response.status === 401) {
      Cookies.remove('accessToken')
      window.location = "/"
    }
    return Promise.reject(error)
  })
  return apiClient
}

export function fetchUser() {
  const url = '/user'
  return api().get(url)
}

export function logoutUser() {
  const url = '/logout'
  return api().get(url)
}

export function fetchTrails(city, state) {
  const url = `/trails/${city}/${state}`
  return api().get(url)
}

export function addFavoriteTrail(props) {
  const userId = props.userId
  const url = `/user/${userId}`
  const body = {
    favorites: {
      'name': props.name,
      'city': props.city,
      'state': props.state,
      'url': props.url,
      'length': props.length,
      'description': props.description,
      'directions': props.directions,
      'trail_id': props.trail_id,
    }
  }
  return api().put(url, body)
}

export function removeFavoriteTrail(props) {
  const trailId = props.trail_id
  const url = `/user/favorites/${trailId}`
  const body = {
    'googleID': props.userId,
  }
  return api().put(url, body)
}
