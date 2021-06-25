import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import style from "../styles/_form";
import { getActualUser, updateUser } from "../../actions/UserAction";
import { useStateValue } from "../../context/store";

export default function UserProfile() {
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [, dispatch] = useStateValue();

  useEffect(() => {
    getActualUser(dispatch).then((response) => {
      setUser(response.data);
    });
  }, [dispatch]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((u) => ({
      ...u,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    updateUser(user).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "OPEN_SNACKBAR",
          openMessage: {
            open: true,
            message: "Update successfuly",
          },
        });
        window.localStorage.setItem("sec_token", response.data.token);
      } else {
        dispatch({
          type: "OPEN_SNACKBAR",
          openMessage: {
            open: true,
            message:
              "An error has ocurred: " + Object.keys(response.data.errors),
          },
        });
      }
    });
  };

  return (
    <Container component="main" maxWidth="md" justify="center">
      <div style={style.paper}>
        <Typography component="h1" variant="h5">
          User Profile
        </Typography>
        <form style={style.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                name="fullname"
                variant="outlined"
                fullWidth
                label="Write your full name"
                value={user.fullname}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                name="username"
                variant="outlined"
                fullWidth
                label="Write your username"
                value={user.username}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="email"
                variant="outlined"
                fullWidth
                label="Write your Email"
                value={user.email}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                label="Write your Password"
                value={user.password}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="confirmpassword"
                type="password"
                variant="outlined"
                fullWidth
                label="Confirm your Password"
                value={user.confirmpassword}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
                style={style.submit}
                onClick={submit}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
