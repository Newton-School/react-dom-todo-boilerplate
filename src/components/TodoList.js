import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle}) => {
    return (
        <div >
            {toDoList.map(todo => {
                return (
                    <div id={todo.id}>
                    <ToDo todo={todo} handleToggle={handleToggle}/>
                    </div>
                )
            })}
           </div>
    );
};

export default ToDoList;