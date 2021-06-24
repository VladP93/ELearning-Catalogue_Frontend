import React, { useState } from "react";
import {
  Container,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import style from "../styles/_form";
import { loginUser } from "../../actions/UserAction";

export default function Login() {
  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setUser((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    loginUser(user).then((response) => {
      console.log(response);
      window.localStorage.setItem("sec_token", response.data.token);
    });
  };

  return (
    <Container maxWidth="xs">
      <div style={style.paper}>
        <Avatar style={style.avatar}>
          <LockOutlinedIcon style={style.icon} />
        </Avatar>
        <Typography component="h1" variant="h5">
          User Login
        </Typography>
        <form style={style.form}>
          <TextField
            variant="outlined"
            label="Write your Email"
            name="Email"
            value={user.Email}
            fullWidth
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            type="password"
            name="Password"
            label="Write your password"
            fullWidth
            value={user.Password}
            onChange={onChange}
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={style.submit}
            margin="normal"
            onClick={submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
