import { useState, useContext } from "react";
import ToDoListContext from "../context/tasks";
function ListEdit( {doTask, handleSubmit} ) {
    const {editTaskById} = useContext(ToDoListContext);
    const [task, setTask] = useState(doTask.task)

    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const handleUpdateSubmit = (event) => {
        event.preventDefault();
        editTaskById(doTask.id, task);
        handleSubmit();
    }
    return(
        <div>
           <form onSubmit={handleUpdateSubmit}>
                <div className="field">
  <label className="label">Edit Task</label>
  <div className="control mb-1">
    <input className="input" type="text" placeholder="Text input" value={task} onChange={handleChange}></input>
  </div>
  <div className="control">
     <button className="button">Update</button>
  </div>
  
</div>
               
                
               
            </form>
        </div>
    )
}

export default ListEdit;