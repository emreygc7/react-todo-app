import {useContext} from 'react'
import {TodoContext} from '../context/TodoContext'
import Todo from './Todo';
import style from '../main.module.css'

const TodoList = () => {

    const {todos} = useContext(TodoContext); 


  return (
    <ul className={style.list}>
        {
            todos.map(todo=> {return(
                <Todo key={todo.id} todo={todo}/>
            )})
        }
     
    </ul>
  )
}

export default TodoList