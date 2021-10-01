import axios from "axios"

const PATH = "http://20.194.59.184:8080";

export const login = ({login_id, password}) => {
  return axios.post(`${PATH}/login`, {login_id: login_id, password: password});
}

export const signup = ({email, group_id, login_id, name, password}) => {
  return axios.post(`${PATH}/signup`, 
    {
      "email": email,
      "group_id": Number(group_id),
      "login_id": login_id,
      "name": name,
      "password": password
    }
  );
}

export const getDashboardData = () => {
  return axios.post(`${PATH}/getDashboardData`);
}