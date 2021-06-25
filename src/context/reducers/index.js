import userSessionReducer from "./userSessionReducer";
import snackbarReducer from "./snackbarReducer";

export const mainReducer = ({ userSession, snackbar }, action) => {
  return {
    userSession: userSessionReducer(userSession, action),
    snackbar: snackbarReducer(snackbar, action),
  };
};
