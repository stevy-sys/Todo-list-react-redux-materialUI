import React, { useState } from "react";
import Layouts from "../Layouts/Layouts";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Todo from "../Components/Todo";
import { Box, GridList } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: 500,
    height: 400,
    backgroundColor: "pink",
  },
  root: {
    width: "100%",
    maxWidth: 500,
  },
}));

const AccueilTodo = ({ todos }) => {
  const classes = useStyles();

  return (
    <Layouts>
      <Box component="h3">Tout les Todo</Box>
      <Box>
        <GridList cellHeight={160} className={classes.gridList} cols={1}>
          <List className={classes.root}>
            {todos.map((element) => {
              if (element.achever === false) return <Todo todo={element} />;
            })}
          </List>
        </GridList>
      </Box>
    </Layouts>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(AccueilTodo);
