import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const About: React.FC = () => {
  return (
    <Container>
      <Box
        marginTop="2em"
        sx={{
          borderRadius: "1em",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h5"
            textAlign="center"
            color="#ffff"
            sx={{
              paddingBottom: "1em",
              width: "50%",
              alignContent: "center",
            }}
          >
            About
          </Typography>
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={10}>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Hi, I'm Jonathan, I'm 20 years old, I studied at the Technical
              University of Babahoyo in the Information Systems career. At 17 I
              started studying web programming and developed a taste for it.
              Currently I am dedicated to web programming I have 3 years of
              experience working in the web environment with the passage of time
              I gained more knowledge and using more tools giving more
              complexity to web projects.
              <br /><br />I handle technologies such as: javascript, react, html, css,
              typesctript, React, Redux, Socket.io, json Web Token, Material-ui
              (MUI), ESLint, js-cookies, Bootstrap, Express, Node, MongoDB,
              MySql, FireBase and creation of Rest Api
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
