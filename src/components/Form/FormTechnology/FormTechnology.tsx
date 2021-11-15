import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import "../FormWebPage/stykle.css";
import { useFormik } from "formik";
import { IFormTechonology } from "../../../interface/interface";
import { useAppDispatch } from "../../../Store/hooks";
import { FormTEchonologyYup } from "../../../validationSchema/validationSchema";
import { saveTechnology } from "../../../Store/ActionTechnology/TechnologyReducer";

const FormTechnology: React.FC = () => {
  /* type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>; */

  const dispatch= useAppDispatch();

  const { getFieldProps, handleSubmit, resetForm, errors, touched } =
    useFormik<IFormTechonology>({
      initialValues: {
        technology: "",
        urlimage: "",
        description:"",
        url:"",
      },
      validationSchema: FormTEchonologyYup,
      onSubmit: async ({ technology, urlimage, description, url }) => {
        /* dispatch(loginSet({email, password})); */
        dispatch(saveTechnology({ technology, urlimage, description, url }))
        resetForm();
      },
    });


  return (
    <form onSubmit={handleSubmit} autoComplete="off">
    <Card
      sx={{
        width: "35%",
        minWidth: "25em",
        background: "#1f212b",
        border: "2px solid white",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Application form new Technology
        </Typography>
        <Typography
          variant="h5"
          component="div"
          marginTop="0.5em"
          textAlign="center"
        >
          New web Technology
        </Typography>
        <Typography
          sx={{ mb: 1.5, marginTop: "2em", textAlign: "center" }}
          color="text.secondary"
        >
          <TextField
            id="outlined-basic"
            label="Name the Technology"
            variant="outlined"
            color="secondary"
            {...getFieldProps("technology")}
            sx={{ width: "100%" }}
          />
          {errors.technology && touched.technology && (
            <Typography sx={{ fontWeight: 700, fontSize: 14, color: "red" }}>
              {errors.technology}
            </Typography>
          )}
        </Typography>

        <Typography
          sx={{ mb: 1.5, marginTop: "2em", textAlign: "center" }}
          color="text.secondary"
        >
          <TextField
            id="outlined-basic"
            label="Name the urlimage"
            variant="outlined"
            color="secondary"
            {...getFieldProps("urlimage")}
            sx={{ width: "100%" }}
          />
          {errors.urlimage && touched.urlimage && (
            <Typography sx={{ fontWeight: 700, fontSize: 14, color: "red" }}>
              {errors.urlimage}
            </Typography>
          )}
        </Typography>

        <Typography
          sx={{ mb: 1.5, marginTop: "2em", textAlign: "center" }}
          color="text.secondary"
        >
          <TextField
            id="outlined-basic"
            label="Name the description"
            variant="outlined"
            color="secondary"
            {...getFieldProps("description")}
            sx={{ width: "100%" }}
          />
          {errors.description && touched.description && (
            <Typography sx={{ fontWeight: 700, fontSize: 14, color: "red" }}>
              {errors.description}
            </Typography>
          )}
        </Typography>


        <Typography
          sx={{ mb: 1.5, marginTop: "2em", textAlign: "center" }}
          color="text.secondary"
        >
          <TextField
            id="outlined-basic"
            label="Name the url"
            variant="outlined"
            color="secondary"
            {...getFieldProps("url")}
            sx={{ width: "100%" }}
          />
          {errors.url && touched.url && (
            <Typography sx={{ fontWeight: 700, fontSize: 14, color: "red" }}>
              {errors.url}
            </Typography>
          )}
        </Typography>


        
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          type="submit"
          color="secondary"
          variant="contained"
        >
          Save
        </Button>
      </CardActions>
    </Card>
    </form>
  );
};

export default FormTechnology;
