 import './App.css';
import { useState, useEffect } from 'react';



function App() {

  const [value, setValue] = useState("");
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('SaveData')))


 


  const addTodo = () => {
      if(!value)
       return alert("Pelase input Todo Task");
     
    const newItem = {
      id: Math.floor(Math.random() * 100),
      value: value
    }
    setItems(oldItems => [...oldItems, newItem])
    setValue("");

 
    if(localStorage.getItem('SaveData') == null)
    {
      localStorage.setItem('SaveData', '[]');
    }
  
     var oldData = JSON.parse(localStorage.getItem('SaveData'));
    oldData.push(newItem);
 

    localStorage.setItem('SaveData', JSON.stringify(oldData))

  }

  const deleteTask = (id) => {
    const newArray = items.filter(item => item.id !== id)
    setItems(newArray);
 
    localStorage.setItem('SaveData', JSON.stringify(newArray))

  }

 
const bringTask = () => {
  var oldData = JSON.parse(localStorage.getItem('SaveData'));
  setItems(oldData);
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
        <button onClick={addTodo} className='addTask'>Add Task</button>
        <button onClick={bringTask} className='addTask'>Bring Task</button>

        <hr />
        <ul>
        {items && items.map(item => {
          return(<>
            <li key={item.id}>{item.value}</li>
            <button className='deleteTask'
            onClick={() => deleteTask(item.id)}
            > Delete Task</button>
             </>
            )
        })}
        </ul>
        {items  &&  "Total Task Remaining  " + items.length}
    </div>
  );
}

export default App;
