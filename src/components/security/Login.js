import React from "react";
import {
  Container,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import style from "../styles/_form";

export default function Login() {
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
            label="Write your Username"
            name="username"
            fullWidth
          />
          <TextField
            variant="outlined"
            type="password"
            name="password"
            label="Write your password"
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={style.submit}
            margin="normal"
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
