import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import "./Style.css";
import { useAppSelector } from "../../Store/hooks";
import { IFormTechonology, IProject } from "../../interface/interface";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { CardStyled } from "../../Shared/CardStyles/CardStyled";

const Galery = () => {
  const openProyect: IProject = useAppSelector(
    (state) => state.OpenProyect.openProyect
  );
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
    openProyect.item.map((item) => {
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
      <h2> Proyecto</h2>
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
      <Grid item xs={6} md={7}>
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
