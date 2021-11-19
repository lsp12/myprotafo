import React from "react";
import { useFormik } from "formik";
import { loginValidationSchema } from "../../../validationSchema/validationSchema";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { loginSet } from "../../../Store/ActionAuth/AuthReducer";
import { useAppDispatch } from "../../../Store/hooks";
import { Box } from "@mui/system";

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
              Login
            </Typography>
            <Box
              sx={{ mb: 1.5, marginTop: "2em", textAlign: "center" }}
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
              
            </Box>
            <Box
              sx={{ mb: 1.5, marginTop: "2em", textAlign: "center" }}
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
              
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small" color="secondary" type="submit">
              Next
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </form>
  );
};

export default FormFoms;
