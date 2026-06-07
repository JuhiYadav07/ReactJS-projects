import React from "react";
import Header from './components/Header';
import TodoItem from "./components/Todoitem";
import Button from "./components/Button";
import Countercomponent from  "./components/Countercomponent";
import './style.css';
const App = () => {
  return (
    <div className="todo-container">
      <Countercomponent />
    <Header title = "TODOIE APP"/>
    <TodoItem text = "Eat"/>
    <TodoItem completed = {true} text = "Code"/>
    <TodoItem text = "Sleep"/>
    <TodoItem text = "Repeat"/>
    <Button />
    </div>
  );
}


export default App;
