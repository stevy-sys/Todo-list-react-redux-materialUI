import React, { useState } from "react";
import Layouts from "../Layouts/Layouts";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Box, GridList, List } from "@material-ui/core";
import Todo from "../Components/Todo";

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
const TodoAchever = ({ todos }) => {
  const classes = useStyles();

  return (
    <>
      <Layouts>
        <Box component="h3">Todo Achever</Box>
        <Box>
          <GridList cellHeight={160} className={classes.gridList} cols={1}>
            <List className={classes.root}>
              {" "}
              {todos.map((element) => {
                if (element.achever === true) return <Todo todo={element} />;
              })}
            </List>
          </GridList>
        </Box>
      </Layouts>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodoAchever);
