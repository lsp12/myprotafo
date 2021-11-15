import {
  CardActions,
  CardContent,
  CardMedia,
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
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { OPEN_PROYECT_ACTION } from "../../Store/OpenProyect/OpenProyectAction";
import { CardStyled } from "../../Shared/CardStyles/CardStyled";

interface Iproyectprops {
  proyect: IProject;
  view: boolean;
  admin: boolean;
}

const Proyect: React.FC<Iproyectprops> = ({ proyect, view, admin }) => {
  const { technology } = useAppSelector((state) => state.technology);
  const { projects } = useAppSelector((state) => state.webPage);
  const dispatch = useAppDispatch();
  const [listech, setlistech] = useState<IFormTechonology[]>([]);
  useEffect(() => {
    const array: IFormTechonology[] = [];
    // eslint-disable-next-line array-callback-return
    proyect.item.map((item) => {
      // eslint-disable-next-line array-callback-return
      technology.filter((technology: IFormTechonology) => {
        if (technology.id === item) {
          array.push(technology);
        }
      });
    });

    setlistech(array);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [technology, projects]);

  const handleOpen = () => {
    dispatch(OPEN_PROYECT_ACTION(proyect));
  };

  const scrollToBottom = (): void => {
    document.getElementById( 'scroll' )?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Grid item xs={12} sm={4}>
      <CardStyled sx={{ maxWidth: "100%", minHeight: "100%", height: "100%" }}>
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
          <Box display="flex" alignItems="center" overflow="auto">
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
                    <Typography
                      variant="body2"
                      color="white"
                      sx={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.technology}
                    </Typography>
                  </Box>
                );
              })}
          </Box>
        </CardContent>
        <Box display="flex" alignItems="center" justifyContent="right">
          {view && (
            <CardActions>
              <RemoveRedEyeOutlinedIcon onClick={()=>{
                handleOpen()
                scrollToBottom()
                }} />
            </CardActions>
          )}
          {admin && (
            <>
              <CardActions>
                <DeleteProyect webProjecy={proyect} />
              </CardActions>
              <CardActions>
                <ProyectTransitionsModal proyect={proyect} />
              </CardActions>
            </>
          )}
        </Box>
      </CardStyled>
    </Grid>
  );
};

export default Proyect;
