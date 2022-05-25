import createHttp from './BaseService'

const http = createHttp(true)


export const createPlan = (data) => http.post("./subscription/new", data)

export const getPlan = (id) => http.get(`./subscription/${id}`)
export const updatePlan = (id, data) => http.patch(`./subscription/${id}`)
export const deletePlan = (id) => http.delete(`./subscription/${id}`)