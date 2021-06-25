import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, Snackbar } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import Navbar from "./components/navigation/Navbar";
import RegisterUser from "./components/security/RegisterUser";
import Login from "./components/security/Login";
import UserProfile from "./components/security/UserProfile";
import { useStateValue } from "./context/store";
import { getActualUser } from "./actions/UserAction";

function App() {
  const [{ snackbar }, dispatch] = useStateValue();
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
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbar ? snackbar.open : false}
        autoHideDuration={3000}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={
          <span id="message-id">
            {snackbar ? snackbar.message : "Error desconocido"}
          </span>
        }
        onClose={() =>
          dispatch({
            type: "OPEN_SNACKBAR",
            openMessage: {
              open: false,
              message: "",
            },
          })
        }
      ></Snackbar>
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
    </React.Fragment>
  );
}

export default App;
