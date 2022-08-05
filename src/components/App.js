import React, { useState } from 'react';

import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

/**
 * 
 *  @todo  {
 *     @id : int 
 *     @complete : boolean
 *     @task : string 
 * } 
 */

function App() {
  const [ toDoList, setToDoList ] = useState([]);


// second task 
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

 /**
  * @task1 : finish addTask method 
  * @addTask : adds todo to @toDoList list 
  *  @param {userInput}} 
  *  @todo => {
  *        id => toDoList.size() + 1 ; 
  *        task : userInput
  *        complete : false by default
  *  }  
  */


  const addTask = (userInput ) => {
      
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
