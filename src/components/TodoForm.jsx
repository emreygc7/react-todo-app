import { useContext, useEffect} from 'react'
import { TodoContext } from '../context/TodoContext'
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import style from '../main.module.css'

const TodoForm = () => {
    const {todo, setTodo, todos, setTodos, editId, setEditId} = useContext(TodoContext); 

    const handleChange = (e) => { 
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => { 
        e.preventDefault(); 

        if(editId === 0){
            if(todo === ""){
                toast.error("Please enter a todo!")
            }else if(todo.length < 3 || todo.length > 100){
                toast.error("Todo must be a minimum of 3 characters and a maximum of 100 characters!")
            } else{
                setTodos([...todos, {id: uuidv4(), task: todo, isCompleted: false}]);
                setTodo("")
                toast.success("Todo added.") 
            }
        }
   
       
        if(editId !== 0){
            const editTodo = todos.find(todo => todo.id === editId)
            const updatedTodos = todos.map(t => 
                t.id === editTodo.id ? (t = {id: t.id, task:todo, isCompleted: t.isCompleted }): ({id: t.id, task: t.task, isCompleted: t.isCompleted})) 
            if(todo !== "" && todo.length > 3){
                setTodos(updatedTodos);
                setEditId(0);
                setTodo(""); 
                toast.info("Todo updated.")
            }
            
            return; 
     
        }
     
    }

    useEffect(()=> {
        const localTodo = localStorage.getItem("todos")
        setTodos(JSON.parse(localTodo))
    },[])

    useEffect(()=> {
        localStorage.setItem("todos", JSON.stringify(todos)); 
    },[todos])

  
   
    return (
            <form className={style.form} action="" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={todo} placeholder="Enter a task..."/>
                <button className={style.addBtn}>{editId ? ("Apply"):("Add Task")}</button>
            </form>
  )
}

export default TodoForm