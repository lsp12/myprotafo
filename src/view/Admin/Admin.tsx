import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FormTechnology from "../../components/Form/FormTechnology/FormTechnology";
import FormWebPage from "../../components/Form/FormWebPage/FormWebPage";
import ListAccion from "../../components/ListAccion/ListAccion";
import Proyect from "../../components/Proyect/Proyect";
import Technology from "../../components/Technology/Technology";
import { IFormTechonology, IProject } from "../../interface/interface";
import { getTechnology } from "../../Store/ActionTechnology/TechnologyReducer";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";

const Admin: React.FC = () => {
  const { open } = useSelector((state: any) => state.actionOpen);
  const { projects } = useAppSelector((state) => state.webPage);
  const { technology } = useAppSelector((state) => state.technology);
  const [component, setcomponent] = useState();
  const dispatch = useAppDispatch();
  const handlerSelect = 1;

  useEffect(() => {
    setcomponent(handlerCard(open));
  }, [technology, open, projects]);

  const handlerForm = (param: string): any => {
    switch (param) {
      case "WebPage":
        return <FormWebPage />;
      case "Newtech":
        return <FormTechnology />;
      default:
        return <span>selecione una accion</span>;
    }
  };

  const handlerCard = (param: string): any => {
    switch (param) {
      case "WebPage":
        return projects.map((e: IProject, i: number) => (
          <Proyect proyect={e} key={i.toString()} />
        ));
      case "Newtech":
        console.log(technology);
        return (
          technology &&
          technology.map((e: IFormTechonology, i: number) => (
            <Technology tecnologi={e} key={i.toString()} />
          ))
        );
      default:
        return <span>selecione una accion</span>;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        margin: "0",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Container sx={{ minWidth: "25em" }}>
          <Grid item xs={12} marginTop="5em">
            <Box display="flex" width="100%" alignItems="center">
              <Grid item xs marginRight="0.5em">
                <ListAccion />
              </Grid>
              <Grid item xs={6} md={8}>
                {handlerForm(open)}
                {/* <FormWebPage /> */}
              </Grid>
            </Box>
          </Grid>

          <Box
            width="100%"
            marginTop="0.5em"
            paddingTop="1em"
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor: "#bebebe",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              sx={{
                borderBottom: "1px solid black",
                width: "50%",
              }}
            >
              {handlerSelect ? <>Developed projects</> : <>Projects</>}
            </Typography>
          </Box>

          <Box
            marginTop="0em"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "#bebebe",
              padding: "1em",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {component}
            </Grid>
          </Box>
        </Container>
      </Grid>
    </Box>
  );
};

export default Admin;
