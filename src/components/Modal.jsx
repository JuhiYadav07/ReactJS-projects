import React, {useState} from 'react';
function Modal ({onClose, onSubmit}) {
  const [Name, setName] = useState("");
  const [age, setAge] = useState("");


const handleSubmit = () =>{onSubmit({
  Name,
  age,
});

setName("");
setAge("");
onClose();

};

return (
  <div className = "overlay">
    <div className = "modal">
    <h2>Add User</h2>

    <input
    type = "text"
    placeholder = "Enter Name"
    value = {Name}
    onChange={(e) => setName(e.target.value)}
    />

    <input 
    type = "number"
    placeholder = "Enter your age"
    value={age}
    onChange={(e) => setAge(e.target.value)}
    />

    <button onClick = {handleSubmit}>Submit</button>

    <button onClick={onClose}>Close</button>
  </div>
  </div>
);
}

export default Modal;
