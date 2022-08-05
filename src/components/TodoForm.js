import React, { useState } from 'react';

const ToDoForm = () => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /** 
         * @task3 : pass current userInput to @addTask method once 
         * form get submitted
         * 
         */
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input id='inputForm' value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button className='submit'>Submit</button>
        </form>
    );
};

export default ToDoForm;