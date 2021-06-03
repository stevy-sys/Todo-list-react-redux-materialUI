import React from "react";
import Layouts from "../Layouts/Layouts";
import { connect } from "react-redux";
import GridList from "@material-ui/core/GridList";
import { makeStyles } from "@material-ui/core/styles";
import ListTodo from "../Components/ListeTodo";

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: 500,
    height: 450,
    backgroundColor: "pink",
  },
}));

const AccueilTodo = ({ todos, deleteTodo, modifierTodo, acheverTodo }) => {
  const classes = useStyles();
  return (
    <>
      <Layouts>
        <h1>Tout les Todo</h1>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          <ListTodo
            todos={todos}
            supprimerTodo={(id) => deleteTodo(id)}
            modifierTodo={(id, newTodo) => modifierTodo(id, newTodo)}
            acheverTodo={(id) => acheverTodo(id)}
          />
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
    deleteTodo: (id) => {
      dispatch({ type: "SUPPRIMER_TODO", id: id });
    },
    modifierTodo: (id, newTodo) => {
      dispatch({ type: "MODIFIER_TODO", id: id, newTodo: newTodo });
    },
    acheverTodo: (id) => {
      dispatch({ type: "ACHEVER_TODO", id: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccueilTodo);
