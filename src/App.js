import React, { useState, useEffect} from 'react';
import"./App.css";
import Header from './components/Header';
import  TodoList  from './components/TodoList';
import Form from './components/Form';

 const App =() => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [] ;
  const [input, setInput] = useState("");
  const[todos, setTodos] = useState(initialState);
  const [userData, setUserData] = useState(initialState)
  const[editTodo, setEditTodo] = useState(null);
console.log("userDatauserData",userData)
console.log("todostodos", todos);
  useEffect(() =>{
    localStorage.setItem("todos",JSON.stringify(todos)); 
  },[todos]);
 /*  useEffect(() =>{
    localStorage.setItem("todos",JSON.stringify(todos)); 
  },[initialState]); */
    return (
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            userData={userData}
            setUserData={setUserData}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <TodoList todos={todos} userData={userData} setUserData={setUserData} setTodos={setTodos} setEditTodo={setEditTodo} setInput={setInput}/>
          </div>
        </div>

      </div>
    )
    }
  
export default App;