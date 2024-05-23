import { ToDoForm } from "./ToDoForm"
import { ToDo } from "./ToDo";
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { EditToDoForm } from "./EditToDoForm";
uuidv4();

export const ToDoWrapper = () => {

    const [todos, setTodos] = useState([])
            // Add new task 
    const addTodo = todo => {
        setTodos([...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false}])
        console.log(todos)
    }
            // Toogle between task completion or not 
    const toggleComplete = id => {
        setTodos(todos.map(todo =>todo.id === id ? {...todo, completed: !todo.completed} :todo))
    }
            // delete tasks 
    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
        // edit todo 
    const editTodo = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))
    }
            // edit task 
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,task, isEditing: !todo.isEditing}: todo))
    }

  return (
    <div className="TodoWrapper">
        <h1>Get Things done!!</h1>
        <ToDoForm addTodo={addTodo}/>
        {todos.map((todo, index)=>(
            todo.isEditing ?
             (<EditToDoForm  editTodo={editTask} task={todo}/> )
            : (<ToDo task={todo} key={index} toggleComplete={toggleComplete} 
            deleteTodo = {deleteTodo} editTodo = {editTodo}/> )
            
        ))}
    </div>
  )
}
