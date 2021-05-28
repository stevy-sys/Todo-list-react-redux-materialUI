import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import AccueilTodo from "./Page/AccueilTodo";
import TodoAdd from "./Page/TodoAdd";
import TodoAchever from "./Page/TodoAchever";
import TodoDeleted from "./Page/TodoDeleted";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <BrowserRouter>
        <Route path="/" exact component={AccueilTodo} />
        <Route path="/addTodo" component={TodoAdd} />
        <Route path="/todo-achever" component={TodoAchever} />
        <Route path="/todo-deleted" component={TodoDeleted} />
      </BrowserRouter>
    </div>
  );
}

export default App;
