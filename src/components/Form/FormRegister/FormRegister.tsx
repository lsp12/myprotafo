import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { registerSet } from "../../../Store/ActionAuth/AuthReducer";
import { useAppDispatch } from "../../../Store/hooks";
import { FormRegisterYup } from "../../../validationSchema/validationSchema";

interface IFormRegister {
  email: "";
  password: "";
  confirPassword: "";
}

const FormRegister: React.FC = () => {
  type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  const dispatch = useAppDispatch();
  const {getFieldProps, handleSubmit, resetForm, errors, touched}= useFormik<IFormRegister>({
    initialValues: {
      email: "",
      password: "",
      confirPassword: "",
    },
    validationSchema:FormRegisterYup,
    onSubmit: async ({email,password,confirPassword})=>{
      try {
        const logued = { email,password,confirPassword }
        dispatch(registerSet(logued));
        resetForm();
        toast.success("Registro exitoso")
      } catch (error) {
        toast.error("Algo fallo..?");
          console.log(error);
      }
    }
  })

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Card
        sx={{
          width: "35%",
          minWidth: "25em",
          background: "#b98d74",
          border: "2px solid white",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Application form Register
          </Typography>

          <Typography
            variant="h5"
            component="div"
            marginTop="0.5em"
            textAlign="center"
          >
            Register
          </Typography>
          <Typography
            sx={{ mb: 1.5, marginTop: "2em", textAlign: "center" }}
            color="text.secondary"
          >
            <TextField
              id="outlined-basic"
              label="Enter user"
              variant="outlined"
              {...getFieldProps("email")}
              sx={{ width: "100%" }}
            />
            {errors.email && touched.email && (
            <Typography sx={{ fontWeight: 700, fontSize: 14, color: "red" }}>
              {errors.email}
            </Typography>
          )}
          </Typography>
          
          <Typography
            sx={{ mb: 1.5, marginTop: "2em", textAlign: "center" }}
            color="text.secondary"
          >
            <TextField
              id="outlined-basic"
              label="Enter password"
              variant="outlined"
              {...getFieldProps("password")}
              sx={{ width: "100%" }}
            />
            {errors.password && touched.password && (
            <Typography sx={{ fontWeight: 700, fontSize: 14, color: "red" }}>
              {errors.password}
            </Typography>
          )}
          </Typography>
          <Typography
            sx={{ mb: 1.5, marginTop: "2em", textAlign: "center" }}
            color="text.secondary"
          >
            <TextField
              id="outlined-basic"
              label="Repeat PassWord"
              variant="outlined"
              {...getFieldProps("confirPassword")}
              sx={{ width: "100%" }}
            />
            {errors.confirPassword && touched.confirPassword && (
            <Typography sx={{ fontWeight: 700, fontSize: 14, color: "red" }}>
              {errors.confirPassword}
            </Typography>
          )}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            size="small"
            color="primary"
            type="submit"
          >
            Next
          </Button>
        </CardActions>
      </Card>
    </Grid>
    </form>
  );
};

export default FormRegister;
