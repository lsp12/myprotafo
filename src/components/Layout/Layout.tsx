import React from "react";
import NavBar from "../Navbar/NavBar";
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
