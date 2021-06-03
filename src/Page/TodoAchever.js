import React from "react";
import Layouts from "../Layouts/Layouts";
import GridList from "@material-ui/core/GridList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: 500,
    height: 450,
    backgroundColor: "pink",
  },
}));

const TodoAchever = () => {
  const classes = useStyles();
  return (
    <>
      <Layouts>
        <h1>Tout les Todo achever</h1>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          <p>todo achever</p>
        </GridList>
      </Layouts>
    </>
  );
};

export default TodoAchever;
