import { AppBar, Button,  Toolbar,  useTheme } from "@mui/material";
import { Box } from "@mui/system";

import React from "react";
/* import { ScrollY } from "../Resolution/Resolution"; */
import { Link } from "react-router-dom";
const NavBar: React.FC = () => {
  const theme = useTheme();
  /* const scroll = ScrollY(); */

  return (
    <Box sx={{ flexGrow: 2 }} width="100%">
      <AppBar position="fixed">
        <Toolbar sx={{
          background:theme.palette.primary.main,
          justifyContent:"flex-end"
        }}>
          
          {/* <Button color="inherit">
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
          </Button> */}

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
