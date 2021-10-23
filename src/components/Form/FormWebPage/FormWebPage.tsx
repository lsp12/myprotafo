import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Formik, useFormik } from "formik";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../../FireBase/FireBase";
import { IFormTechonology } from "../../../interface/interface";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import { FormWebPageSchema } from "../../../validationSchema/validationSchema";
import MultipleSelectChip from "../../CheckboxExample/CheckboxExample";
import { Theme, useTheme } from "@mui/material/styles";
import "./stykle.css";
import { Box } from "@mui/system";
import { getTechnology } from "../../../Store/ActionTechnology/TechnologyReducer";
import { createProject } from "../../../Store/ActionWebPage/WebPageReducer";

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

const FormWebPage: React.FC = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const { technology } = useAppSelector((state) => state.technology);
  const dispatch = useAppDispatch();



  function nameById(data: string) {
    const tecnology = technology.filter(
      (tecnology: IFormTechonology) => tecnology.id === data
    );
    return tecnology[0].technology;
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
    useFormik<IFormWebPage>({
      initialValues: {
        title: "",
        description: "",
        link: "",
        item: [],
      },
      validationSchema: FormWebPageSchema,
      onSubmit: async ({ title, description, link, item }) => {
        try {
          const logued = { title, description, link, item: personName };
          dispatch(createProject(logued));
          setPersonName([]);
          toast.success("REgister efectivo");

          resetForm();
        } catch (error) {
          toast.error("Algo fallo..?");
          console.log(error);
        }
      },
    });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Card
        sx={{
          width: "100%",
          background: "#b98d74",
          border: "2px solid white",
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
            New web page
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
              {technology.length > 0 &&
                technology.map((name: IFormTechonology) => (
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
  );
};

export default FormWebPage;
