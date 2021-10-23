import React from "react";
import { Container } from "@mui/material";
import NavBar from "../Navbar/NavBar";
import { Box } from "@mui/system";
const Layout: React.FC = (props) => {
  const { children } = props;
  return (
    <>
        <header>
          <NavBar />
        </header>
        <main>
          {children}
        </main>
    </>
  );
};

export default Layout;
