import React from 'react'

 const TodoList = ({todos, userData, setUserData, setTodos, setEditTodo, setInput}) => {

    const handleDelete = ({id}) =>{
        const dummyData = todos.filter((todo) => todo.id !== id )
        // localStorage.se
        setUserData(dummyData);
        setTodos(dummyData);
    }

    const handleComplete = ({id}) =>{
        const dummyData = todos.map((item) =>{
            if(item.id === id){
                return{...item , completed: !item.completed};
            }
            return item;
        })
        setTodos(dummyData)
        setUserData(dummyData)
    }
    
    const handleEdit = ({id}) =>{
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
        setInput(findTodo.title)
    }
  return (
    <div>
       {userData.map((todo) =>(
           <li className='todo-list' key={todo.id}>
               <input type="text" value={todo.title} className={`list ${todo.completed ? "completed" : ""}`} /* onChange={(event) => event.preventDefault()} *//>
               <div>
                   <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                       <i className='fa fa-check-circle'></i>
                   </button>
                   <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                       <i className='fa fa-edit'></i>
                   </button>
                   <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
                       <i className='fa fa-trash'></i>
                   </button>
               </div>
           </li>
       
        ))} 
    </div>
  );
};

export default TodoList;