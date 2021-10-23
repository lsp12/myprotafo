import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FormFoms from "../../components/Form/FormFoms/FormFoms";
import FormLogin from "../../components/Form/FormLogin/FormLogin";
import Foto1 from "../../image/perfil.jpg";

const Login: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        margin: "0",
        backgroundImage: `url(${Foto1})`,
        backgroundSize: "cover cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Container
        sx={{
          paddingTop: "5em",
        }}
      >
        <FormFoms />
      </Container>
    </Box>
  );
};

export default Login;
