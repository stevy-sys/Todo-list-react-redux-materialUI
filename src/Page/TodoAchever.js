import React from "react";
import Layouts from "../Layouts/Layouts";
import { makeStyles } from "@material-ui/core/styles";
import { Box, List } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: 500,
    height: 450,
    backgroundColor: "pink",
  },
  root: {
    width: "100%",
    maxWidth: 500,
  },
}));
const TodoAchever = () => {
  const classes = useStyles();
  return (
    <>
      <Layouts>
        <Box component="h1">Tout les Todo Achever</Box>
        <Box className={classes.gridList}>
          <List className={classes.root}>test</List>
        </Box>
      </Layouts>
    </>
  );
};

export default TodoAchever;
