import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { IFormTechonology, Itecnology } from "../../interface/interface";
import ResponsiveDialog from "../Dialogs/Dialogs";
import TransitionsModal from "../Modal/Modal";
interface tec {
  tecnologi: IFormTechonology;
}

const Technology: React.FC<tec> = ({ tecnologi }) => {
  return (
    <Grid item xs={6}>
      <Card variant="outlined">
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            marginBottom="0.5em"
            justifyContent="space-between"
          >
            <Box justifyContent="center" display="flex" alignItems="center">
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
            <Box display="flex" alignItems="center">
              <CardActions>
                <ResponsiveDialog technology={tecnologi} />
              </CardActions>
              <CardActions>
                <TransitionsModal tecnologi={tecnologi} />
              </CardActions>
            </Box>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {tecnologi.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Technology;
