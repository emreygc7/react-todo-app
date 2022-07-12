import { createContext, useState } from "react";



export const TodoContext = createContext(); 

const TodoContextProvider = ( props ) => {
    
const [todo, setTodo] = useState(""); 
const [todos, setTodos] = useState([]); 
const [editId, setEditId] = useState(0); 


const data = {
    todo, 
    setTodo, 
    todos,
    setTodos,
    editId,
    setEditId,
}
 

    return(
        <TodoContext.Provider value={data}>
            {props.children}
        </TodoContext.Provider>
    )
} 

export default TodoContextProvider; 