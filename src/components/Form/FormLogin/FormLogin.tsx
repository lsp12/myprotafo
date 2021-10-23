import { signInWithEmailAndPassword } from "@firebase/auth";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import { auth } from "../../../FireBase/FireBase";

const FormLogin: React.FC = () => {
    type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

    const init={
      user:"",
      password:"",
    }
    const [logued,setLogued]=useState(init);
    const handleInputChange = (e:InputChange)=>{
        setLogued({
            ...logued,[e.target.name]:e.target.value
        })
     
    }
    const handlerButton = async ()=>{
        await signInWithEmailAndPassword(auth, logued.user, logued.password);
        toast.success("logueado facilmente")
    }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Card
        sx={{
          width: "35%",
          minWidth:"25em",
          background: "#b98d74",
          border: "2px solid white",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
          <Typography variant="h5" component="div" marginTop="0.5em" textAlign="center">
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
              name="user"
              onChange={handleInputChange}
              sx={{ width: "100%" }}
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
              onChange={handleInputChange}
              name="password"
              sx={{ width: "100%" }}
            />
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button size="small" color="primary" onClick={()=>{
              handlerButton()
          }}>
            Next
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default FormLogin;
