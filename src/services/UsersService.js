import createHttp from './BaseService'

const http = createHttp(true)

export const getCurrentUser = () => http.get('/user/me')
export const getUserDetail = (id) => http.get(`/user/${id}`)
export const payment = (data) => http.post('/users/123234234/checkout', data)