/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
import { Hidden } from '@mui/material';

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Resolution } from "../Resolution/Resolution";
import { ReactComponent as About } from "../../image/svg/about.svg";

const Perfil: React.FC = () => {
  const resolution = Resolution();

  useEffect(() => {
    let element = document.getElementById("perfil");
    if (element) {
      if (resolution.width <= 800) {
        element.style.display = "none";
      } else {
        element.style.display = "inline";
      }
    }
  }, [resolution]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        marginBottom: "0em",
        paddingTop: "5em",
      }}
    >
      <Grid item xs={12} md={6}>
        
          
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
                  color: "white",
                  fontFamily: "body",
                  display: "flex",
                  borderTop: "1px solid black",
                  borderBottom: "1px solid black",
                  justifyContent: "center",
                }}
              >
                JONATHAN VERA MACIAS
                <br />
                DEVELOPED WEB
              </Typography>

              <Box display="flex" justifyContent="center" alignItems="center">
                <Box marginRight="1.5em">
                  <Typography variant="body2">
                    Cuentas
                    <br />
                    <Typography
                      sx={{
                        textDecoration: "none",
                        color: "#323232",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://github.com/lsp12" target="_blank">
                        <GitHubIcon sx={{ color: "text.secondary" }} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/jonathan-kenny-vera-macias-b23234202/"
                        target="_blank"
                      >
                        <LinkedInIcon sx={{ color: "text.secondary" }} />
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
                        <WhatsAppIcon sx={{ color: "text.secondary" }} />
                      </a>
                    </Typography>
                  </Typography>
                </Box>

                <Box marginLeft="1.5em">
                  <Typography variant="body2" component="p">
                    Correo
                    <br />
                    <Typography
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        alignItems: "center",
                        fontFamily: "body",
                        
                      }}
                      
                      textOverflow="hidden"
                      noWrap
                    >
                      jonathankenny852@gmail.com
                    </Typography>
                  </Typography>
                </Box>
              </Box>
          
        
      </Grid>
      <Grid xs md={4}>
      <Hidden smDown>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <About style={{ width: "100%" }} />
        </Box>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default Perfil;
