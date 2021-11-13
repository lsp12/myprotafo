import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, CardActions, CardContent, TextField } from "@mui/material";
import { IFormTechonology } from "../../interface/interface";
import { FormTEchonologyYup } from "../../validationSchema/validationSchema";
import { useAppDispatch } from "../../Store/hooks";
import { useFormik } from "formik";
import { updateTechnology } from "../../Store/ActionTechnology/TechnologyReducer";
import CreateIcon from '@mui/icons-material/Create';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface tec {
    tecnologi: IFormTechonology;
  }

export default function TransitionsModal({tecnologi}:tec) {
    /* const tecnologia = tecnologi.tecnologi; */
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useAppDispatch();

  const { getFieldProps, handleSubmit, resetForm, errors, touched } =
    useFormik<IFormTechonology>({
      initialValues: {
        technology: tecnologi.technology,
        urlimage: tecnologi.urlimage,
        description: tecnologi.description,
        url: tecnologi.url,
      },
      validationSchema: FormTEchonologyYup,
      onSubmit: async ({ technology, urlimage, description, url }) => {
          const id =  tecnologi.id
        /* dispatch(saveTechnology({ technology, urlimage, description, url })) */
        dispatch( updateTechnology({id,technology, urlimage, description, url }))
        setOpen(false)
        resetForm();
      },
    });

  return (
    <div>
      
      <CreateIcon onClick={handleOpen} sx={{cursor:"pointer"}} />
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 50000,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={handleSubmit} autoComplete="off">
              <Card
                sx={{
                  width: "35%",
                  minWidth: "25em",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Application form new Technology
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    marginTop="0.5em"
                    textAlign="center"
                  >
                    Update web Technology
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
                      <Typography
                        sx={{ fontWeight: 700, fontSize: 14, color: "red" }}
                      >
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
                      <Typography
                        sx={{ fontWeight: 700, fontSize: 14, color: "red" }}
                      >
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
                      multiline
                      maxRows={4}
                      minRows={4}
                      {...getFieldProps("description")}
                      sx={{ width: "100%" }}
                    />
                    {errors.description && touched.description && (
                      <Typography
                        sx={{ fontWeight: 700, fontSize: 14, color: "red" }}
                      >
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
                      <Typography
                        sx={{ fontWeight: 700, fontSize: 14, color: "red" }}
                      >
                        {errors.url}
                      </Typography>
                    )}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button size="small" color="primary" type="submit">
                    Save
                  </Button>
                </CardActions>
              </Card>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
