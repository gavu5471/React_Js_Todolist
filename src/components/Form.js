import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, userData, setUserData, editTodo, setEditTodo }) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );

        setTodos(newTodo);
        setUserData(newTodo);
        setEditTodo("");
    }
    

    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            let dummyData = todos
            dummyData.push({ id: uuidv4(), title: input, completed: false })
            setUserData(dummyData);
            setTodos(dummyData);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }


    };
    const remove = () => {
        localStorage.clear();
        setTodos([]);
        setUserData([]);
    }
    const changeTypeHandler = (event) => {
        if (event === 'Active') {
            const dummyData = todos.filter(item => item.completed === false)
            setUserData(dummyData)
        }
        else if (event === 'Completed') {
            const dummyData = todos.filter(item => item.completed === true)
            setUserData(dummyData)
        }
        else {
            setUserData(todos)
        }
    }
    console.log("editTodo",editTodo);
    return (
        <>
                <div>
                    <input type="text" placeholder='Enter a Todo...' className='task-input' value={input} onChange={onInputChange} />
                    <button className='button-add btn effect01' onClick={onFormSubmit}>
                        {editTodo ? "ok" : "Add"}
                    </button>
                    <button className='btn-Remove effect01' onClick={remove}>
                        Remova all
                    </button>
                </div>
            <button className='btn-All effect04' onClick={() => changeTypeHandler('All')}>
                All
            </button>
            <button className='btn-Active effect02' onClick={() => changeTypeHandler('Active')}>
                Active
            </button>
            <button className='btn-Completed effect03' onClick={() => changeTypeHandler('Completed')}>
                Completed
            </button>
        </>
    )
}

export default Form;