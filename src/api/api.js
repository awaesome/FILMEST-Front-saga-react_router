export const getToken = () => localStorage.getItem('access_token')
export const setToken = value => localStorage.setItem('access_token', value)
export const removeToken = () =>  localStorage.removeItem('access_token')

export const getAuth = () => localStorage.getItem('authorized')
export const setAuth = value => localStorage.setItem('authorized', value)
export const removeAuth = () =>  localStorage.removeItem('authorized')

export const isLogged = () => {
  try {
    return !!JSON.parse(getAuth())
  } catch (e) {
    return null
  }
}


