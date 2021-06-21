import HttpClient from "../services/HttpClient";

export const userRegister = (user) => {
  return new Promise((resolve, eject) => {
    HttpClient.post("/User/register", user).then((response) => {
      resolve(response);
    });
  });
};

export const getActualUser = () => {
  return new Promise((resolve, eject) => {
    HttpClient.get("/User").then((response) => {
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
