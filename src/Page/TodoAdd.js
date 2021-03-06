import React from "react";
import Layouts from "../Layouts/Layouts";
import AddTodo from "../Components/AddTodo";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: 500,
    height: 450,
    backgroundColor: "pink",
  },
}));

const TodoAdd = ({ addTodo }) => {
  const classes = useStyles();
  return (
    <>
      <Layouts>
        <Box component="h3">Ajouter un todo</Box>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          <AddTodo addTodo={(newTodo) => addTodo(newTodo)} />
        </GridList>
      </Layouts>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (newTodo) => {
      if(newTodo.length <= 0){
        alert("veuillez entrez un todo valide")
      }else {
        dispatch({ type: "AJOUTER_TODO", newTodo: newTodo });
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd);
