import HttpClient from "../services/HttpClient";

export const userRegister = (user) => {
  return new Promise((resolve, eject) => {
    HttpClient.post("/User/register", user).then((response) => {
      resolve(response);
    });
  });
};

export const getActualUser = (dispatch) => {
  return new Promise((resolve, eject) => {
    HttpClient.get("/User").then((response) => {
      dispatch({
        type: "LOG_IN",
        session: response.data,
        auth: true,
      });
      resolve(response);
    });
  });
};

export const updateUser = (user) => {
  return new Promise((resolve, eject) => {
    HttpClient.put("/User", user).then((response) => {
      resolve(response);
    });
  });
};

export const loginUser = (user) => {
  return new Promise((resolve, eject) => {
    HttpClient.post("User/login", user).then((response) => {
      resolve(response);
    });
  });
};
