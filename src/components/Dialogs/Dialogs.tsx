import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { IFormTechonology, IProject } from '../../interface/interface';
import { deleteTechnology } from '../../Store/ActionTechnology/TechnologyReducer';
import { useAppDispatch } from '../../Store/hooks';
import { deleteWebPage } from '../../Store/ActionWebPage/WebPageReducer';
interface dialog{
    technology:IFormTechonology
}
export default function ResponsiveDialog({technology}:dialog) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteDocument = ()=>{
    console.log(technology.id)
    dispatch(deleteTechnology(technology))
    setOpen(false);
  }

  return (
    <>
      
      <DeleteIcon onClick={handleClickOpen} sx={{cursor:"pointer"}} />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"are you sure to remove the component? "+technology.technology}
        </DialogTitle>
        
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={deleteDocument} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}


interface proyect{
  webProjecy:IProject
}

export function DeleteProyect({webProjecy}:proyect) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteDocument = ()=>{
    console.log(webProjecy.id)
    dispatch(deleteWebPage(webProjecy))
    setOpen(false);
  }

  return (
    <>
      
      <DeleteIcon onClick={handleClickOpen} sx={{cursor:"pointer"}} />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"are you sure to remove the component? "+webProjecy.title}
        </DialogTitle>
        
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={deleteDocument} autoFocus>
          accept
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
