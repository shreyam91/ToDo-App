import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export const ToDo = ({task, toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
          {/* click on task to toggle the task is completed or not  */}
        <p onClick={() => toggleComplete(task.id)}className={`${task.completed ? 'completed' : " "}`}>{task.task}</p>
        <div> 
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)}/>
        </div>
    </div>
  )
}
