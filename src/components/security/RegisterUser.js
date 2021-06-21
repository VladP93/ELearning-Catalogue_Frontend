import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { userRegister } from "../../actions/UserAction";
import style from "../styles/_form";

export default function RegisterUser() {
  const [user, setUser] = useState({
    FullName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    UserName: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((u) => ({
      ...u,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    userRegister(user).then((response) => {
      console.log(response);
      window.localStorage.setItem("sec_token", response.data.token);
    });
  };

  return (
    <Container component="main" maxWidth="md" justify="center">
      <div style={style.paper}>
        <Typography component="h1" variant="h5">
          User Registration
        </Typography>
        <form style={style.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                name="FullName"
                variant="outlined"
                fullWidth
                label="Write your full name"
                onChange={onChange}
                value={user.FullName}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="Email"
                variant="outlined"
                fullWidth
                label="Write your Email"
                onChange={onChange}
                value={user.Email}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="UserName"
                variant="outlined"
                fullWidth
                label="Write your Username"
                onChange={onChange}
                value={user.UserName}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="Password"
                type="password"
                variant="outlined"
                fullWidth
                label="Write your Password"
                onChange={onChange}
                value={user.Password}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="ConfirmPassword"
                type="password"
                variant="outlined"
                fullWidth
                label="Confirm your Password"
                onChange={onChange}
                value={user.ConfirmPassword}
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={style.submit}
                onClick={submit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
