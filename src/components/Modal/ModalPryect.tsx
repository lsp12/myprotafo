import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IFormTechonology, IProject } from '../../interface/interface';
import CreateIcon from '@mui/icons-material/Create';
import { Card, CardActions, CardContent, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { useFormik } from 'formik';
import { FormWebPageSchema } from '../../validationSchema/validationSchema';
import { toast } from 'react-toastify';
import { Theme, useTheme } from "@mui/material/styles";
import { useEffect } from 'react';
import { updateProject } from '../../Store/ActionWebPage/WebPageReducer';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Iproyectprops {
    proyect: IProject;
  }

  interface IFormWebPage {
    title: "";
    description: "";
    link: "";
    item: [];
  }
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

export default function ProyectTransitionsModal({proyect}: Iproyectprops) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const items= useAppSelector((state) => state.technology.technology);
  const dispatch = useAppDispatch();

    useEffect(() => {
        const tecnologiesIdsToPut: any = [];
        const item = proyect.item;
        if(item !== undefined && item.length > 0){
            item.map((e:any) => {
                tecnologiesIdsToPut.push(e);
            });
        }
        setPersonName(tecnologiesIdsToPut as string[]);
        
    }, [items]);

  function nameById(data: string) {
    const tecnology = items.filter(
      (tecnology: IFormTechonology) => tecnology.id === data
    );
    if(tecnology.length > 0){
        return tecnology[0].technology;
    }
    
    return "";
  }

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const { getFieldProps, handleSubmit, resetForm, errors, touched } =
    useFormik<IProject>({
      initialValues: {
        title: proyect.title,
        description: proyect.description,
        link: proyect.link,
        item: [],
      },
      validationSchema: FormWebPageSchema,
      onSubmit: async ({ title, description, link, item }) => {
        try {
            const id = proyect.id;
            console.log("id del proyecto a actualizar"+id);
          const logued = {id ,title, description, link, item: personName };
          await dispatch(updateProject(logued));
          console.log(logued);
          setPersonName([]);
          setOpen(false)
          resetForm();
        } catch (error) {
          toast.error("Algo fallo..?");
          console.log(error);
        }
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
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            

          <form onSubmit={handleSubmit} autoComplete="off">
      <Card
        sx={{
          width: "100%",
          
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Application form new web page
          </Typography>
          <Typography
            variant="h5"
            component="div"
            marginTop="0.5em"
            textAlign="center"
          >
            Update web page
          </Typography>
          <Typography
            sx={{ mb: 1.5, marginTop: "2em", textAlign: "center" }}
            color="text.secondary"
          >
            <TextField
              id="outlined-basic"
              label="Name the Project"
              variant="outlined"
              color="secondary"
              {...getFieldProps("title")}
              sx={{ width: "100%" }}
            />
          </Typography>
          {errors.title && touched.title && (
            <Typography sx={{ fontWeight: 700, fontSize: 14, color: "red" }}>
              {errors.title}
            </Typography>
          )}

          <Typography
            sx={{ mb: 1.5, marginTop: "2em", textAlign: "center" }}
            color="text.secondary"
          >
            <TextField
              id="outlined-basic"
              label="Link the image"
              variant="outlined"
              color="secondary"
              {...getFieldProps("link")}
              sx={{ width: "100%" }}
            />
            {errors.link && touched.link && (
              <Typography sx={{ fontWeight: 700, fontSize: 14, color: "red" }}>
                {errors.link}
              </Typography>
            )}
          </Typography>

          <Typography
            sx={{ mb: 1.5, marginTop: "2em", textAlign: "center" }}
            color="text.secondary"
          >
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              multiline
              rows={4}
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

          <FormControl sx={{ m: 1, width: 300 }} variant="filled">
            <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
            <Select
              color="primary"
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {(selected as string[]).map((value) => (
                    <Chip key={value} label={nameById(value)} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {items.length > 0 &&
                items.map((name: IFormTechonology) => (
                  <MenuItem
                    key={name.id}
                    value={name.id}
                    style={getStyles(name.technology, personName, theme)}
                  >
                    {name.technology}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
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
