import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import RegisterUser from "./components/security/RegisterUser";
import Login from "./components/security/Login";
import UserProfile from "./components/security/UserProfile";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <RegisterUser />
      <hr />
      <Login />
      <hr />
      <UserProfile />
    </MuiThemeProvider>
  );
}

export default App;
