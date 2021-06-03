import React from "react";
import Layouts from "../Layouts/Layouts";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Todo from "../Components/Todo";
import { Box } from "@material-ui/core";

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

const AccueilTodo = ({ todos }) => {
  const classes = useStyles();
  return (
    <>
      <Layouts>
        <Box component="h1">Tout les Todo</Box>
        <Box className={classes.gridList}>
          <List className={classes.root}>
            {todos.map((element) => {
              return <Todo todo={element} />;
            })}
          </List>
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

export default connect(mapStateToProps)(AccueilTodo);
