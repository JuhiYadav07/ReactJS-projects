import React from 'react';

const  Todoitem = (props) =>{
  return (
  <li className='todoItem'>
  <span>
  {props.completed ? <> </> : <input type="checkbox" />}
  <span className='todoitemtext'>{props.text}</span>
  </span>
  <p>...</p>
  
  </li>
  )
}

export default Todoitem;