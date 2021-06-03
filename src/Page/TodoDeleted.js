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
const TodoDeleted = () => {
  const classes = useStyles();
  return (
    <>
      <Layouts>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          <p>todo supprimer</p>
        </GridList>
      </Layouts>
    </>
  );
};

export default TodoDeleted;
