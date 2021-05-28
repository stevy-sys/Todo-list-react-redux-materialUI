import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Todo from "./Todo";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
  },
}));

export default function Liste({
  todos,
  supprimerTodo,
  modifierTodo,
  acheverTodo,
}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {todos.map((element) => {
        return (
          <Todo
            acheverTodo={(id) => acheverTodo(id)}
            modifierTodo={(id, newTodo) => modifierTodo(id, newTodo)}
            todo={element}
            supprimerTodo={(id) => supprimerTodo(id)}
          />
        );
      })}
    </List>
  );
}
