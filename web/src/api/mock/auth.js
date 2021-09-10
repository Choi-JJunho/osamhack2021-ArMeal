const res = {
  token: "tototo",
  data: {
    unitName: "1군지사 수도군수지원단 1896부대",
  }
}

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

const login = async ({id, pw}) => {
  await wait(3000)
  if(id !== "idid" || pw !=="pwpw") throw new Error("존재하지 않는 계정")
  return res;
}

export { login };