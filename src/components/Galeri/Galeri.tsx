import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CardContent, CardMedia, Grid, Typography } from "@mui/material";
import "./Style.css";
import { useAppSelector } from "../../Store/hooks";
import { IFormTechonology, IProject } from "../../interface/interface";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { CardStyled } from "../../Shared/CardStyles/CardStyled";

const Galery = () => {
  let openProyect: IProject = useAppSelector(
    (state) => state.OpenProyect.openProyect
  );
  const { projects } = useAppSelector((state) => state.webPage);
  if(!openProyect.id){
    openProyect=projects[0]
  
  }
  
  const { technology } = useAppSelector((state) => state.technology);
  const [nameById, setNameById] = useState<IFormTechonology[]>([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    const array: IFormTechonology[] = [];
    // eslint-disable-next-line array-callback-return
    openProyect.item.map((item) => {
      // eslint-disable-next-line array-callback-return
      technology.filter((technology: IFormTechonology) => {
        if (technology.id === item) {
          array.push(technology);
        }
      });
    });

    setNameById(array);
  }, [technology, openProyect]);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <Box textAlign="center">
          <Typography color="white" variant="inherit" fontSize="19px">
            Proyecto
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={5}>
        <Slider {...settings}>
          <CardStyled sx={{ minHeight: "15em", display: "flex" }}>
            <CardContent sx={{ alignSelf: "center" }}>
              <CardMedia
                image={openProyect.link}
                title="Contemplative Reptile"
                component="img"
                height="150em"
              />
            </CardContent>
          </CardStyled>
          <CardStyled>
            <CardContent>
              <h3>2</h3>
            </CardContent>
          </CardStyled>
          <CardStyled>
            <CardContent>
              <h3>3</h3>
            </CardContent>
          </CardStyled>
        </Slider>
      </Grid>
      <Grid item xs={6} md={7} sx={{
        paddingLeft: "2em",
      }}>
        <h2>{openProyect.title}</h2>
        <p>{openProyect.description}</p>
        <Box display="flex" alignItems="center" alignSelf="initial">
          {nameById.map((item: IFormTechonology) => (
            <p style={{ paddingRight: "0.5em" }}>{item.technology}</p>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Galery;
