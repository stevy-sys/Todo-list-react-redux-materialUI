import ListeTodo from "../Components/ListeTodo";
import "../App.css";

function Application({ todos, supprimerTodo, modifierTodo, acheverTodo }) {
  /**
   * ajouter un nouveau todo
   * @param {*} NewTodo
   */
  /*
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
  */

  return (
    <ListeTodo
      todos={todos}
      supprimerTodo={(id) => supprimerTodo(id)}
      modifierTodo={(id, newTodo) => modifierTodo(id, newTodo)}
      acheverTodo={(id) => acheverTodo(id)}
    />
  );
}

export default Application;
