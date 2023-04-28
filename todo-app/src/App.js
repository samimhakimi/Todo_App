 import './App.css';
import { useState } from 'react';



function App() {

  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const addTodo = () => {
      if(!value)
       return alert("Pelase input Todo Task");
     
    const newItem = {
      id: Math.random(),
      value: value
    }
    setItems(oldItems => [...oldItems, newItem])
    setValue("");

  }
  return (
    <div className="App">
        <h1>
          Todo List App in React.js
        </h1>

        <input
         className='input'
         placeholder='Type new Task to be added..'
         on onChange={(e) => setValue(e.target.value)} 
         value={value} /> 
        <button onClick={addTodo} className='addButton'>Add Task</button>

        <hr />
        <ul>
        {items.map(item => {
          return(
            <li>{item.value}</li>
          )
        })}
        </ul>
    </div>
  );
}

export default App;
