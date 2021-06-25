import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import Navbar from "./components/navigation/Navbar";
import RegisterUser from "./components/security/RegisterUser";
import Login from "./components/security/Login";
import UserProfile from "./components/security/UserProfile";
import { useStateValue } from "./context/store";
import { getActualUser } from "./actions/UserAction";

function App() {
  const [, dispatch] = useStateValue();
  const [initApp, setInitApp] = useState(false);

  useEffect(() => {
    if (!initApp) {
      getActualUser(dispatch)
        .then((response) => {
          setInitApp(true);
        })
        .catch((err) => {
          setInitApp(true);
        });
    }
  }, [dispatch, initApp]);

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Grid container>
          <Switch>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/register" component={RegisterUser} />
            <Route exact path="/auth/profile" component={UserProfile} />
            <Route exact path="/" component={UserProfile} />
          </Switch>
        </Grid>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
