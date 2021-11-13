import {
  CircularProgress,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import About from "../../components/About/About";
import Perfil from "../../components/Perfil/Perfil";
import Proyect from "../../components/Proyect/Proyect";
import Technology from "../../components/Technology/Technology";
import about from "../../image/about.jpg";
import { Resolution } from "../../components/Resolution/Resolution";
import {
  IFormTechonology,
  IProject,
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
        <Technology tecnologi={e} key={i.toString()} admin={false} />
      ));
    } else {
      return <CircularProgress />;
    }
  };

  const getProyect = () => {
    if (projects.length > 0) {
      return projects.map((e: IProject, i: number) => (
        <Proyect key={i.toString()} proyect={e} view={true} admin={false} />
      ));
    } else {
      return <CircularProgress />;
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
          background:
            "linear-gradient(90deg, rgba(78,81,106,1) 0%, rgba(48,50,64,1) 71%)",
        }}
      >
        <Perfil />
      </Box>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        sx={{
          backgroundColor: theme.palette.secondary.main,
        }}
      >
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
          backgroundColor: theme.palette.primary.light,
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "white",
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
          backgroundColor: theme.palette.primary.light,
        }}
      >
        <Container>
          {projects.length > 0 ? <Galery /> : <CircularProgress />}
        </Container>
      </Box>

      <Box
        marginTop="0em"
        sx={{
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Container sx={{ padding: "1em" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            {getProyect()}
          </Grid>
        </Container>
      </Box>
      <Box
        width="100%"
        paddingTop="1em"
        sx={{
          backgroundColor: theme.palette.primary.light,
        }}
      >
        <Typography variant="h6" align="center" color="white">
          All Technologies learned
        </Typography>
      </Box>
      <Box
        marginTop="0.5em"
        paddingBottom="1em"
        sx={{
          backgroundColor: theme.palette.primary.light,
        }}
      >
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
