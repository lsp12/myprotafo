import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect } from "react";
import { useStyles } from "./styles";
import { ScrollY } from "../Resolution/Resolution";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const classes = useStyles();
  const scroll = ScrollY();

  useEffect(() => {
    let element = document.getElementById("navbar");
    if (element) {
      if (scroll >= 630) {
        element.style.backgroundColor = "#785A59";
      } else {
        element.style.backgroundColor = "#000000";
      }
    }
  }, [scroll]);

  return (
    <Box sx={{ flexGrow: 2 }} width="100%">
      <AppBar position="fixed">
        <Toolbar id="navbar" className={classes.root}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Login
            </Link>
          </Button>

          <Button color="inherit">
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Register
            </Link>
          </Button>

          <Button color="inherit">
            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
