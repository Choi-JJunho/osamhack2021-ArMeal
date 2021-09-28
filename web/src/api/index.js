import axios from "axios"

const PATH = "http://20.194.59.184";

export const login = ({login_id, password}) => {
  return axios.post(`${PATH}/login`, {login_id: login_id, password: password});
}

export const getDashboardData = () => {
  return axios.post(`${PATH}/getDashboardData`);
}