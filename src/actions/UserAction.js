import HttpClient from "../services/HttpClient";

export const userRegister = (user) => {
  return new Promise((resolve, eject) => {
    HttpClient.post("/User/register", user).then((response) => {
      resolve(response);
    });
  });
};
