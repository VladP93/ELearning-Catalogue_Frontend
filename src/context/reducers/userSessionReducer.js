const initialState = {
  user: {
    fullname: "",
    username: "",
    email: "",
    image: "",
  },
  auth: false,
};

const userSessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user: action.session,
        auth: action.auth,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: action.newUser,
        auth: action.auth,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.newUser,
        auth: action.auth,
      };
    default:
      return state;
  }
};

export default userSessionReducer;
