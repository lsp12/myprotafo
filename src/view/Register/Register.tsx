import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FormRegister from '../../components/Form/FormRegister/FormRegister'
import Foto1 from "../../image/perfil.jpg";

const Register = () => {
    return (
        <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          margin:"0",
          backgroundImage: `url(${Foto1})`,
          backgroundSize: "cover cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Container sx={{
            paddingTop:"5em"
        }}>
          <FormRegister />
        </Container>
      </Box>
    )
}

export default Register
