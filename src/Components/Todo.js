import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  Checkbox,
  IconButton,
  Input,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "line-through",
  },
}));

const Todo = ({ type,todo, deleteTodo, modifierTodo, acheverTodo }) => {
  const [editTodo, setEditTodo] = useState(false);
  const classes = useStyles();

  const handleChangeEditTodo = (e) => {
    setEditTodo(e.target.value);
  };

  /**
   * declencher apres click de modifier
   * @param {*} todo
   */
  const activeEdit = (todo) => {
    setEditTodo(todo);
  };

  /**
   * appliquer le modification de todo
   * @param {*} id
   * @param {*} editTodo
   */
  const edit = (id, editTodo) => {
    const edit = editTodo;
    setEditTodo(false);
    modifierTodo(id, edit);
  };

  return (
    <>
      <ListItem>
        {editTodo !== false ? (
          <Input
            defaultValue="Hello world"
            inputProps={{ "aria-label": "description" }}
            value={editTodo}
            onChange={(e) => handleChangeEditTodo(e)}
          />
        ) : (
          <ListItemText
            primary={todo.todo}
            secondary={`inserer le ${todo.date}`}
            className={todo.achever && classes.root}
          />
        )}
        {type !== 'delete' ?
          <ListItemSecondaryAction>
            <Checkbox
              edge="end"
              onChange={() => acheverTodo(todo.id)}
              checked={todo.achever === true}

            //inputProps={{ "aria-labelledby": labelId }}
            />
            <IconButton edge="end" aria-label="edit">
              <EditIcon
                onClick={
                  editTodo !== false
                    ? () => edit(todo.id, editTodo)
                    : () => activeEdit(todo.todo)
                }
                color={editTodo !== false ? "primary" : ""}
              />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon onClick={() => deleteTodo(todo.id)} color="secondary" />
            </IconButton>
          </ListItemSecondaryAction>
          : ''}
      </ListItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
