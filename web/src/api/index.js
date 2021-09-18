import axios from "axios"

const PATH = "http://13.124.124.151:8080";

export const login = async ({id, pw}) => {
  await axios.post(`${PATH}/login`, {id: id, password: pw}).then((res) => {
    return res;
  }).catch((e) => {
    throw new Error(e);
  })
}

export const getDashboardData = async () => {
  await axios.post(`${PATH}/getDashboardData`).then((res) => {
    return res;
  }).catch((e) => {
    throw new Error(e);
  })
}