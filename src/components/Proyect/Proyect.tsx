import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Portafolio from "../../image/proyect1.jpeg";
import { IFormTechonology, IProject } from "../../interface/interface";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { DeleteProyect } from "../Dialogs/Dialogs";
import ProyectTransitionsModal from "../Modal/ModalPryect";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { OPEN_PROYECT_ACTION } from "../../Store/OpenProyect/OpenProyectAction";
import { CardStyled } from "../../Shared/CardStyles/CardStyled";

interface Iproyectprops {
  proyect: IProject;
}

const Proyect: React.FC<Iproyectprops> = ({ proyect }) => {
  const { technology } = useAppSelector((state) => state.technology);
  const { projects } = useAppSelector((state) => state.webPage);
  const dispatch = useAppDispatch()
  const [listech, setlistech] = useState<IFormTechonology[]>([]);
  useEffect(() => {
    const array: IFormTechonology[] = [];
    proyect.item.map((item) => {
      technology.filter((technology: IFormTechonology) => {
        if (technology.id === item) {
          array.push(technology);
        }
      });
    });

    setlistech(array);
  }, [technology, projects]);

  const handleOpen = ( ) => {
    
    dispatch(OPEN_PROYECT_ACTION(proyect));
    
  }

  return (
    <Grid item xs={12} sm={4}>
      <CardStyled sx={{ maxWidth: "100%", minHeight:"100%", height:"100%", marginBottom: "0.5em" }}>
        <CardMedia
          component="img"
          height="140"
          image={Portafolio}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {proyect.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {proyect.description}
          </Typography>
          <Box display="flex" alignItems="center">
            {listech &&
              listech.map((item: IFormTechonology) => {
                return (
                  <Box
                    borderRadius="5%"
                    padding="0.2em"
                    border="1px solid"
                    marginRight="0.5em"
                    sx={{
                      backgroundColor: "#424242",
                    }}
                  >
                    <Typography variant="body2" color="white">
                      {item.technology}
                    </Typography>
                  </Box>
                );
              })}
          </Box>
        </CardContent>
        <Box display="flex" alignItems="center" justifyContent="right">
        <CardActions>
            <RemoveRedEyeOutlinedIcon onClick={
              handleOpen
              } />
          </CardActions>
          <CardActions>
            <DeleteProyect webProjecy={proyect} />
          </CardActions>
          <CardActions>
            <ProyectTransitionsModal proyect={proyect} />
          </CardActions>
        </Box>
      </CardStyled>
    </Grid>
  );
};

export default Proyect;
