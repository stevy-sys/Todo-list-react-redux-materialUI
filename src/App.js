import ListeTodo from "./Components/ListeTodo";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { Box, Grid } from "@material-ui/core";
import TodoHeader from "./Components/TodoHeader";
import TodoFooter from "./Components/TodoFooter";

function App() {
  /**
   * formalisation des dates
   * @returns
   */
  const date = () => {
    let date = new Date();
    let [heure, minute, seconde] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    return `${heure}:${minute}:${seconde}`;
  };

  /**
   * initialisation des states
   */
  const [todo, setTodo] = useState([
    {
      id: uuidv4(),
      todo: "reveiller",
      achever: false,
      date: date(),
      etat: false,
    },
    { id: uuidv4(), todo: "manger", achever: false, date: date(), etat: false },
    { id: uuidv4(), todo: "coder", achever: false, date: date(), etat: false },
    {
      id: uuidv4(),
      todo: "dormier",
      achever: false,
      date: date(),
      etat: false,
    },
  ]);

  /**
   * ajouter un nouveau todo
   * @param {*} NewTodo
   */
  const ajouterTodo = (NewTodo) => {
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        todo: NewTodo,
        achever: false,
        date: date(),
      },
    ]);
  };

  /**
   * supprimer un todo
   * @param {*} id
   */
  const supprimerTodo = (id) => {
    setTodo(
      todo.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        }
      })
    );
  };

  /**
   * achever un todo
   * @param {*} id
   */
  const acheverTodo = (id) => {
    setTodo(
      todo.filter((todo) => {
        if (todo.id === id) {
          todo.achever = !todo.achever;
          todo.date = date();
        }
        return todo;
      })
    );
  };

  /**
   * modifier un todo
   * @param {*} id
   * @param {*} newTodo
   */
  const modifierTodo = (id, newTodo) => {
    setTodo(
      todo.filter((todo) => {
        if (todo.id === id) {
          todo.todo = newTodo;
          todo.etat = false;
        }
        return todo;
      })
    );
  };

  return (
    <div style={{ display: "flex" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "80vh" }}
      >
        <TodoHeader />

        <ListeTodo
          modifierTodo={(id, newTodo) => modifierTodo(id, newTodo)}
          todos={todo}
          acheverTodo={(id) => acheverTodo(id)}
          supprimerTodo={(id) => supprimerTodo(id)}
        />
        <TodoFooter />
      </Grid>
    </div>
  );
}

export default App;
