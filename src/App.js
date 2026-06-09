import React, {useState} from "react";
import Header from './components/Header';
import TodoItem from "./components/Todoitem";
import Button from "./components/Button";
import Countercomponent from  "./components/Countercomponent";
import Modal from "./components/Modal";
import './style.css';
const App = () => {
  const [showModal, setShowModal] = useState (false);
  const [users, setUsers] = useState([]);
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
    console.log([...users, newUser]);
  };
  return (
    <div className="todo-container">
      <Countercomponent />
    <Header title = "TODOIE APP"/>
    {users.map((user, index)=>(
      <TodoItem key = {index} text = {`${user.Name} - ${user.age}`} />
    ))}
    <Button onClick={()=> setShowModal(true)}/>
    {showModal && (<Modal 
    onClose={() => setShowModal(false)}
    onSubmit={addUser}
    />
  )}
    </div>
  );
}


export default App;
