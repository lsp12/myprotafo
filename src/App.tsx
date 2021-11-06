import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout/Layout";
import Routes from "./routes/Routes";
import { getTechnology } from "./Store/ActionTechnology/TechnologyReducer";
import { getWepPage } from "./Store/ActionWebPage/WebPageReducer";
import { useAppDispatch } from "./Store/hooks";



const App: React.FC = () => {
  const theme = createTheme({
  palette: {
    mode:"dark",
    primary: {
      main: "#1f2235",
    },
    secondary: {
      main: "#23263a",
    },
  },
});
const dispatch = useAppDispatch();
useEffect(() => {
  dispatch(getTechnology())
  dispatch(getWepPage());
}, [])
  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Layout>
        <Routes />
      </Layout>
      <ToastContainer />
    </Box>
    </ThemeProvider>
  );
};

export default App;
