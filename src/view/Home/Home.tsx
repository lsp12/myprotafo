import { Container, Grid, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import About from "../../components/About/About";
import Perfil from "../../components/Perfil/Perfil";
import Proyect from "../../components/Proyect/Proyect";
import Technology from "../../components/Technology/Technology";
import Foto1 from "../../image/perfil.jpg";
import about from "../../image/about.jpg";
import { Resolution } from "../../components/Resolution/Resolution";
import { TecnologisFront } from "../../data/data";
import {
  IFormTechonology,
  IProject,
  Itecnology,
} from "../../interface/interface";
import { useAppSelector } from "../../Store/hooks";
import Galery from "../../components/Galeri/Galeri";
const Home: React.FC = () => {
  const theme = useTheme();
  const resolution = Resolution();
  const { projects } = useAppSelector((state) => state.webPage);
  const { technology } = useAppSelector((state) => state.technology);

  useEffect(() => {
    let element = document.getElementById("img");
    if (element) {
      if (resolution.width <= 800) {
        element.style.display = "none";
      } else {
        element.style.display = "inline";
      }
    }
  }, [resolution]);

  const getTechnology = (): any => {
    if (technology.length > 0) {
      return technology.map((e: IFormTechonology, i: number) => (
        <Technology tecnologi={e} key={i.toString()} />
      ));
    } else {
      return <>esta cargando</>;
    }
  };

  const getProyect = () => {
    if (projects.length > 0) {
      return projects.map((e: IProject, i: number) => (
        <Proyect key={i.toString()} proyect={e} />
      ));
    } else {
      return <>esta cargando</>;
    }
  };

  return (
    <Box
      sx={{
        marginTop: "0em",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url(${Foto1})`,
          backgroundSize: "cover cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Perfil />
      </Box>
      <Box width="100%" display="flex" alignItems="center" 
      sx={{
        backgroundColor: theme.palette.primary.main,
      }}>
        <About />
        <Box
          id="img"
          sx={{
            maxWidth: "50%",
          }}
        >
          <img src={about} style={{ maxWidth: "100%" }} alt="about" />
        </Box>
      </Box>
      <Box
        width="100%"
        marginTop="0em"
        paddingTop="1em"
        display="flex"
        justifyContent="center"
        sx={{
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            width: "50%",
          }}
        >
          Developed projects
        </Typography>
      </Box>

      <Box
        marginTop="0em"
        paddingBottom="2em"
        sx={{
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Galery />
      </Box>

      <Box
        marginTop="0em"
        sx={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Container sx={{ padding: "1em" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {getProyect()}
          </Grid>
        </Container>
      </Box>
      <Box width="100%" marginTop="1em" sx={{}}>
        <Typography variant="h6" align="center" color="white">
          All Technologies learned
        </Typography>
      </Box>
      <Box marginTop="0.5em" paddingBottom="1em">
        <Container>
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {getTechnology()}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
