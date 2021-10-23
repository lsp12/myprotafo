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
import { useAppSelector } from "../../Store/hooks";
import { DeleteProyect } from "../Dialogs/Dialogs";
import ProyectTransitionsModal from "../Modal/ModalPryect";

interface Iproyectprops {
  proyect: IProject;
}

const Proyect: React.FC<Iproyectprops> = ({ proyect }) => {
  const { technology } = useAppSelector((state) => state.technology);
  const [listech, setlistech] = useState<IFormTechonology[]>([]);
  useEffect(() => {
    const array: IFormTechonology[] = [];
    proyect.item.map((item) => {
      debugger;
      array.push(technologyList(item));
      
    });
    console.log(proyect.title);
    console.log(array);
    setlistech(array);
  }, []);



  const technologyList = (id: string) => {
    debugger;
    const list = technology.filter((technology: IFormTechonology) => {
      debugger;
      return technology.id === id;
    });
    if(list.length > 0){
      debugger;
      return list[0].technology as unknown as IFormTechonology;
      
    }
    debugger;
    return [] as unknown as IFormTechonology;
    
    /* console.log(list);
    if (list.length > 0) {
      list.map((technology: IFormTechonology) => {
        return (
          <Box
            borderRadius="25%"
            padding="0.2em"
            border="1px solid"
            sx={{
              backgroundColor: "#424242",
            }}
          >
            <Typography variant="body2" color="white">
            {technology.technology}
            </Typography>
          </Box>
        );
      });
    } */
  };

  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345, marginBottom: "0.5em" }}>
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
            {listech && listech.map((item:any) => {

              return (
                <Box
              borderRadius="25%"
              padding="0.2em"
              border="1px solid"
              sx={{
                backgroundColor: "#424242",
              }}
            >
              <Typography variant="body2" color="white">
                {listech}
              </Typography>
            </Box>
              )
            })
            }
            
          </Box>
        </CardContent>
        <Box display="flex" alignItems="center" justifyContent="right">
          <CardActions>
            <DeleteProyect webProjecy={proyect} />
          </CardActions>
          <CardActions>
            <ProyectTransitionsModal proyect={proyect} />
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

export default Proyect;
