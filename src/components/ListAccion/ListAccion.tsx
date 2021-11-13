import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import DraftsIcon from '@mui/icons-material/Drafts';
import WebIcon from '@mui/icons-material/Web';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changeList } from '../../Store/ActionReducer/ProjectAction';

const ListAccion:React.FC = () => {
    const dispatch = useDispatch();
    
    const selectAction = (id: string) =>{
      dispatch(changeList(id))
    }

    useEffect(() => {
      dispatch(changeList("WebPage"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color:"white" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            List the Accions
          </ListSubheader>
        }
      >
        <ListItemButton
        onClick={() => selectAction( "WebPage" )}
        >
          <ListItemIcon>
            <WebIcon />
          </ListItemIcon>
          <ListItemText primary="Enter new web page" />
        </ListItemButton>
        <ListItemButton
        onClick={() => selectAction( "Newtech" )}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Enter new technology" />
        </ListItemButton>
      </List>
    )
}

export default ListAccion
