import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        /**
         * @task2 : on clicking this todo, @handleToggle will mark it as complete. 
         * if a task is marked as complete, add a @done tag 'taskname  done '
         * 'done' should be all lowercase 
         * */
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={"todo"}>
         
        </div> 
        
    );
};

export default ToDo;