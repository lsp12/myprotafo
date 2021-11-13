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
import React from "react";
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
  /* type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>; */

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
          background: "rgba(74, 63, 69, 0.6)",
        }}
      >
        <CardContent>
          

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
              error={!!errors.email && touched.email}
              helperText={touched.email && errors.email}
            />
            
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
              error={!!errors.password && touched.password}
              helperText={touched.password && errors.password}
            />
            
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
              error={!!errors.confirPassword && touched.confirPassword}
              helperText={touched.confirPassword && errors.confirPassword}
            />
            
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            size="small"
            color="secondary"
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
