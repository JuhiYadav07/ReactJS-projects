import React, { useState } from 'react'
const Countercomponent = () => {
  const [count, setCount] = useState(15);
  // const [value, setvalue] = useState ("Juhi")
  // console.log ('Hello', count);
  return (
    <div>
      <p>Counter component - {count} </p>
      <h2> {count} is the{count % 2===0 ? " Even" : " Odd"} number </h2>
    
      <button onClick = {() => setCount(count + 1)}> Increment</button>
      <button onClick = {() => setCount(count - 1)}> Decrement</button>
      

      </div>
    
  );
}

export default Countercomponent;