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
import { IFormTechonology, IProject } from "../../interface/interface";
import { useAppSelector } from "../../Store/hooks";
import Galery from "../../components/Galeri/Galeri";
import blob from "../../image/svg/blob.svg";

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
          minHeight: "100vh",
          background:
            "linear-gradient(90deg, rgba(78,81,106,1) 0%, rgba(48,50,64,1) 71%)",
        }}
      >
        <Container>
          <Perfil />
        </Container>
      </Box>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        sx={{
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${blob})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <About />
        </Box>
        <Box
          id="img"
          sx={{
            maxWidth: "50%",
          }}
        >
          <img src={about} style={{ maxWidth: "100%" }} alt="about" />
        </Box>
      </Box>
      <div id="scroll" />
      <Box
        width="100%"
        marginTop="0em"
        paddingTop="1em"
        display="flex"
        justifyContent="center"
        sx={{
          background:
            "linear-gradient(90deg, rgba(78,81,106,1) 0%, rgba(48,50,64,1) 71%)",
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
          background:
            "linear-gradient(90deg, rgba(78,81,106,1) 0%, rgba(48,50,64,1) 71%)",
        }}
      >
        <Container>
          {projects.length > 0 ? <Galery /> : <CircularProgress />}
        </Container>
      </Box>

      <Box
        marginTop="0em"
        sx={{
          background:
            "linear-gradient(90deg, rgba(78,81,106,1) 0%, rgba(48,50,64,1) 71%)",
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
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Typography variant="h6" align="center" color="white">
          All Technologies learned
        </Typography>
      </Box>
      <Box
        marginTop="0.5em"
        paddingBottom="0em"
        sx={{
          backgroundColor: theme.palette.secondary.main,
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
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#3f4155"
              fill-opacity="1"
              d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,117.3C672,96,768,64,864,74.7C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
