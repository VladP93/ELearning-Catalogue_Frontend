import React from "react";
import { AppBar } from "@material-ui/core";
import BarSession from "./bar/BarSession";

export default function Navbar() {
  return (
    <AppBar position="static">
      <BarSession />
    </AppBar>
  );
}
