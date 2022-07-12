import React, { useContext }from 'react'
import { TodoContext } from '../context/TodoContext'
import { toast } from 'react-toastify';
import style from '../main.module.css'

const Todo = ({todo}) => {

    const {todos, setTodos, setTodo, setEditId, editId} = useContext(TodoContext); 
 
 
    const deleteTodo = (id) => { 
        if(editId !== 0 ){
            toast.error("It cannot be deleted while in edit mode.")
        }else{
            const deletedTodo = todos.filter(t => t.id !== id)
            setTodos([...deletedTodo])
            console.log(...deletedTodo);
            toast.error("Todo deleted.")
    
        }
    }

    const editTodo = (id) => {
        const editedTodo = todos.find(t => t.id === id )
        setTodo(editedTodo.task)
        setEditId(id)
        console.log(editedTodo);
        console.log(editId);
    }

    const completeTodo = (id) => {
        const completedTodo = todos.find(t => t.id === id)
        completedTodo.isCompleted = !completedTodo.isCompleted; 
        setTodos([...todos], completedTodo.isCompleted)
    }


   
    return(
        <>
            <li  className={ todo.isCompleted ? (`${style.completedTodo} ${style.listItem}`) : (style.listItem)} >
                {todo.task}
            
            <div>
                <button onClick={() => completeTodo(todo.id)} className={style.completeBtn}>
                    <i className="fa-solid fa-check"></i>
                </button>
                

                <button onClick={() => editTodo(todo.id)} className={style.editBtn}>
                    <i className="fa-solid fa-pencil" ></i>
                </button>
                
                
                <button onClick={() => deleteTodo(todo.id)} className={style.deleteBtn}>
                    <i className="fa-regular fa-circle-xmark"></i>
                </button>
                
                
              
            </div>
            
            </li>
            
        </>
      
    )
}

export default Todo