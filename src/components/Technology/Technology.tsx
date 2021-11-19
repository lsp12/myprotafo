import {
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { IFormTechonology } from "../../interface/interface";
import { CardStyled } from "../../Shared/CardStyles/CardStyled";
import ResponsiveDialog from "../Dialogs/Dialogs";
import TransitionsModal from "../Modal/Modal";
interface tec {
  tecnologi: IFormTechonology;
  admin: boolean;
}

const Technology: React.FC<tec> = ({ tecnologi, admin }) => {
  return (
    <Grid item sm={6} xs={12}>
      <CardStyled variant="outlined" sx={{ maxWidth: "100%", minHeight:"100%", height:"100%", marginBottom: "0.5em" }} >
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            marginBottom="0.5em"
            justifyContent="space-between"
          >
            <Box justifyContent="center" display="flex" alignItems="center">
              {/* eslint-disable-next-line react/jsx-no-target-blank*/}
              <a href={tecnologi.url} target="_blank">
                <CardMedia
                  component="img"
                  alt={tecnologi.technology}
                  image={tecnologi.urlimage}
                  title={tecnologi.technology}
                  sx={{
                    width: "3.5em",
                    borderRadius: "25%",
                  }}
                />
              </a>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                paddingLeft="0.5em"
              >
                {tecnologi.technology}
              </Typography>
            </Box>
            {admin && (
            <Box display="flex" alignItems="center">
              <CardActions>
                <ResponsiveDialog technology={tecnologi} />
              </CardActions>
              <CardActions>
                <TransitionsModal tecnologi={tecnologi} />
              </CardActions>
            </Box>
            )}
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow:"hidden",
              textOverflow:"ellipsis",
              display:"-webkit-box",
              WebkitLineClamp:3,
              WebkitBoxOrient:"vertical",

            }}
          >
            
            {tecnologi.description}
            
          </Typography>
        </CardContent>
      </CardStyled>
    </Grid>
  );
};

export default Technology;
