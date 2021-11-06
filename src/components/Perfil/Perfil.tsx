/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CardMedia, Container, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Perfil: React.FC = () => {
  return (
    <Container>
      <Box display="flex" alignContent="center" alignItems="center" alignSelf="center">
        

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Box sx={{marginTop: "25%",}}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  textAlign="center"
                  gutterBottom
                >
                  My profile
                </Typography>
                <Typography
                  variant="h5"
                  textAlign="center"
                  sx={{
                    display: "flex",
                    borderTop: "1px solid black",
                    borderBottom: "1px solid black",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  JONATHAN VERA MACIAS
                </Typography>

                <Box display="flex" justifyContent="center" alignItems="center">
                  <Box marginRight="1.5em">
                    <Typography variant="body2">
                      Cuentas
                      <br />
                      <Typography
                        sx={{ textDecoration: "none", color: "#323232" }}
                      >
                        <a href="https://github.com/lsp12" target="_blank">
                          <GitHubIcon sx={{ color: "#323232" }} />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/jonathan-kenny-vera-macias-b23234202/"
                          target="_blank"
                        >
                          <LinkedInIcon sx={{ color: "#323232" }} />
                        </a>
                      </Typography>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      Contacto
                      <br />
                      <Typography
                        sx={{
                          textDecoration: "none",
                          color: "#000000",
                          alignItems: "center",
                        }}
                      >
                        <a
                          href="https://api.whatsapp.com/send?phone=+593997747417"
                          target="_blank"
                        >
                          <WhatsAppIcon sx={{ color: "#323232" }} />
                        </a>{" "}
                        <>+593 997747418</>
                      </Typography>
                    </Typography>
                  </Box>

                  <Box marginLeft="1.5em">
                    <Typography variant="body2">
                      Correo
                      <br />
                      <Typography
                        sx={{
                          textDecoration: "none",
                          color: "#000000",
                          alignItems: "center",
                        }}
                      >
                        jonathankenny852@gmail.com
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Box
              sx={{
                marginTop: "25%",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <CardMedia
                component="img"
                alt="My Imagen"
                image="https://cdn.discordapp.com/attachments/799457340910469151/906369571546615818/58646932-removebg-preview.png"
                title="My Imagen"
                sx={{
                  minWidth: "25%",
                  maxWidth: "50em",
                }}
              />
            </Box>
          </Grid>
        </Grid> 
      </Box>
    </Container>
  );
};

export default Perfil;
