import { useState, useContext } from "react";
import ToDoListContext from "../context/tasks";

function ListCreate() {

    const { createToDoList } = useContext(ToDoListContext);



    const [task, setTask] = useState('');

    const handleChange = (event) => {
        setTask(event.target.value);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createToDoList(task);
        setTask('');

    }
    return(
        <div className="has-background-primary">
            <div className="container  p-4 ">

                 <form onSubmit={handleSubmit}>
                <div className="field">
  <label className="label">Add a Task</label>
  <div className="control mb-1">
    <input className="input" type="text" placeholder="Text input" value={task} onChange={handleChange}></input>
  </div>
  <div className="control">
     <button className="button">Save</button>
  </div>
  
</div>
               
                
               
            </form>
            </div>
           
        </div>
    )
}

export default ListCreate;