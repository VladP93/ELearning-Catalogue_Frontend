import React from "react";
import {
  makeStyles,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core";
import logo from "../../../logo.svg";
import { useStateValue } from "../../../context/store";

export default function BarSession() {
  const classes = useStyles();
  const [{ userSession }] = useStateValue();

  console.log(userSession);

  return (
    <Toolbar>
      <IconButton color="inherit">
        <i className="material-icons">menu</i>
      </IconButton>
      <Typography variant="h6">Online Courses</Typography>
      <div className={classes.grow}></div>
      <div className={classes.sectionDesktop}>
        <Button color="inherit">Salir</Button>
        <Button color="inherit">
          {userSession ? userSession.user.username : "ERROR"}
        </Button>
        <Avatar src={logo}></Avatar>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton color="inherit">
          <i className="material-icons">more_vert</i>
        </IconButton>
      </div>
    </Toolbar>
  );
}

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  avatarSize: {
    width: 40,
    height: 40,
  },
}));
