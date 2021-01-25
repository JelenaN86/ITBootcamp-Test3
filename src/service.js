import axios from 'axios'

//https://api.spacexdata.com/v4

const BASE_URL = 'https://api.spacexdata.com/v4'
const COMP_INFO = '/company'
const LAUNCHES = '/launches'
const NEXT_LAUNCHES = `${LAUNCHES}/next`
const NEXT_LAUNCH_ID = `${LAUNCHES}/:id`
const STARLINK_ALL = '/starlink'

export const getCompanyInfo = () => axios.get(`${BASE_URL}${COMP_INFO}`)
export const getNextLaunch = () => axios.get(`${BASE_URL}${NEXT_LAUNCH_ID}`)
export const getAllStarlink = () => axios.get(`${BASE_URL}${STARLINK_ALL}`)