import { v4 as uuidv4 } from "uuid";

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
 * state initiale
 */
const initState = {
  todos: [
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
      todo: "dormir",
      achever: false,
      date: date(),
      etat: false,
    },
  ],
  todosSupprimer:[
    
  ]
};

const rootReducer = (state = initState, action) => {
  //console.log(action.type);


  //suprimer une todo
  if (action.type === "SUPPRIMER_TODO") {
    let newTodo = state.todos.filter((todo) => {
      return action.id !== todo.id;
    });
    let todosSuprim = state.todos.filter((todo) => {
      return action.id === todo.id;
    });
    
    state.todosSupprimer.push(todosSuprim[0]);
    return {
      ...state,
      todos: newTodo,
      //todosSupprimer:todosSuprim
    };
  }

  //modifier une todo
  if (action.type === "MODIFIER_TODO") {
    state.todos.filter((todo) => {
      if (todo.id === action.id) {
        todo.todo = action.newTodo;
        todo.etat = false;
      }
      return todo;
    });
  }

  //achever une todo
  if (action.type === "ACHEVER_TODO") {
    const todo = state.todos.filter((todo) => {
      if (todo.id === action.id) {
        todo.achever = !todo.achever;
        todo.date = date();
      }
      return todo;
    });
    return {
      ...state,
      todos: todo,
    };
  }

  //ajouter une todo
  if (action.type === "AJOUTER_TODO") {
    state.todos.push({
      id: uuidv4(),
      todo: action.newTodo,
      achever: false,
      date: date(),
    });
  }

  return state;
};

export default rootReducer;
