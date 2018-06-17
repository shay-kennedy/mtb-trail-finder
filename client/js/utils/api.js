import * as axios from 'axios'
import Cookies from 'js-cookie'


const api = () => {
  const apiClient = axios.create({
    baseURL: window.location.origin
  })
  const authtoken = Cookies.get('accessToken') || ''
  apiClient.defaults.headers.common['Authorization'] = `bearer ${authtoken}`
  apiClient.interceptors.response.use(response => {
    return Promise.resolve(response)
  }, error => {
    if (error.response.status === 401) {
      Cookies.remove('accessToken')
      window.location = "/"
    }
    return Promise.reject(error)
  })
  return apiClient
}

export const fetchUser = () => {
  const url = '/user'
  return api().get(url)
}

export const logoutUser = () => {
  const url = '/user/logout'
  return api().get(url)
}

export const fetchTrails = (city, state) => {
  const url = `/trails/${city}/${state}`
  return api().get(url)
}

export const addFavoriteTrail = (props) => {
  const {
    name, city, state, url, length,
    description, directions, trail_id
  } = props
  const apiUrl = `/user/favorites/add`
  const body = {
    favorites: {
      name,
      city,
      state,
      url,
      length,
      description,
      directions,
      trail_id,
    }
  }
  return api().put(apiUrl, body)
}

export const removeFavoriteTrail = (trailId) => {
  const url = `/user/favorites/remove/${trailId}`
  return api().delete(url)
}
