import React from "react";
import { useFormik } from "formik";
import { loginValidationSchema } from "../../../validationSchema/validationSchema";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../FireBase/FireBase";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { loginSet } from "../../../Store/ActionAuth/AuthReducer";
import { useAppDispatch } from "../../../Store/hooks";

interface ILoginForm {
  email: string;
  password: string;
}

const FormFoms = () => {
    const dispatch = useAppDispatch()
  const { getFieldProps, handleSubmit, errors, touched } =
    useFormik<ILoginForm>({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginValidationSchema,
      onSubmit: async ({ email, password }) => {
        dispatch(loginSet({email, password}));
      },
    });

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
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Application form Login
            </Typography>
            <Box display="flex" justifyContent="center">
              <CardMedia
                component="img"
                alt="My Imagen"
                image="https://avatars.githubusercontent.com/u/58646932?s=400&u=4eff013db506eb79005d79195c40847e9803ed32&v=4"
                title="My Imagen"
                sx={{
                  minWidth: "25%",
                  maxWidth: "15em",
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Typography
              variant="h5"
              component="div"
              marginTop="0.5em"
              textAlign="center"
            >
              Login
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
              { errors.email && touched.email && (
                <Typography
                  sx={{ fontWeight: 700, fontSize: 14 , color: "red"}}
                >
                  {errors.email}
                </Typography>
              ) }
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
              { errors.password && touched.password && (
                <Typography
                  sx={{ fontWeight: 700, fontSize: 14 , color: "red"}}
                >
                  {errors.password}
                </Typography>
              ) }
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small" color="primary" type="submit">
              Next
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </form>
  );
};

export default FormFoms;
