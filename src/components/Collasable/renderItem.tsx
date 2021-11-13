import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { TransitionGroup } from "react-transition-group";
import { Fab, Typography } from "@mui/material";

const FRUITS = [
  "🍏 Apple",
  "🍌 Banana",
  "🍍 Pineapple",
  "🥥 Coconut",
  "🍉 Watermelon",
];

export interface RenderItemOptions {
  item: string;
}

export function renderItem(
  item: string,
  deleteLinks: React.Dispatch<React.SetStateAction<string>>
) {
  return (
    <ListItem
      sx={{
        backgroundColor: "#474c67",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
      }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => deleteLinks(item)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Typography
      variant="body2"
      sx={{
        
        whiteSpace: "nowrap",
        overflow: "auto",
        "&::-webkit-scrollbar, &::-webkit-scrollbar": {
          width: 1,
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: `inset 0 0 1px rgba(0, 0, 0, 0.3)`,
        },
        "&::-webkit-scrollbar-thumb": {
          
          outline: `1px solid slategrey`,
        },
        
      }}
      >
        {item}
        </Typography>
      {/* <ListItemText primary={item} /> */}
    </ListItem>
  );
}

export default function TransitionGroupExample() {
  const [fruitsInBasket, setFruitsInBasket] = React.useState(
    FRUITS.slice(0, 3)
  );

  const handleAddFruit = () => {
    const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
    if (nextHiddenItem) {
      setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
    }
  };

  

  const addFruitButton = (
    <Button
      variant="contained"
      disabled={fruitsInBasket.length >= FRUITS.length}
      onClick={handleAddFruit}
    >
      <Fab size="small" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Button>
  );

  return (
    <div>
      {addFruitButton}
      <Box sx={{ mt: 1 }}>
        <List>
          <TransitionGroup>
            {fruitsInBasket.map((item) => (
              <Collapse key={item}>{/* {renderItem({ item })} */}</Collapse>
            ))}
          </TransitionGroup>
        </List>
      </Box>
    </div>
  );
}
