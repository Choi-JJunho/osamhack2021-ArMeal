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

export const getAllSidedishData = (group_id) => {
  return axios.get(`${PATH}/get/ingredient/info/${group_id}/all`)
}

export const getRatioToday = ({date, group_id}) => {
  return axios.get(`${PATH}/get/ratio/today/${group_id}/${date}`);
}

export const addRatingDaily = ({userId, date, time, rating_value, badReason, group_id}) => {
  return axios.post(`${PATH}/add/rating/daily`, [{
    userId: userId,
    date: date,
    time: time,
    rating_value: rating_value,
    badReason: badReason,
    group_id: group_id
  }]);
}

export const getManagementData = ({group_id, start, end}) => {
  return axios.post(`${PATH}/getMonthData`, 
    {
      "group_id": Number(group_id),
      "start": start,
      "end": end,
    }
  );
}

export const getDashboardData = () => {
  return axios.post(`${PATH}/getDashboardData`);
}