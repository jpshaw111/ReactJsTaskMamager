
import { useContext, useState } from "react";
import ToDoListContext from "../context/tasks";
import ListEdit from "./ListEdit";




function ListShow( {doTask} ) {
    const {deleteTaskById} = useContext(ToDoListContext);

    const [showEdit, setShowEdit] = useState(false);

    const handleEdit = () => {
            setShowEdit(!showEdit);
    }

    const handleDelete = () => {
        deleteTaskById(doTask.id)
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <time datetime="2016-1-1">{ new Date().toLocaleString()}</time>

    if(showEdit) 
        content = <ListEdit doTask={doTask} handleSubmit={handleSubmit} />

    return(
        <div>

            <div className="card mb-3">
                <header className="card-header">
    <p className="card-header-title"> {doTask.task}</p>
    <button className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div className="card-content">
    <div className="content">
     {content}
      
    </div>
  </div>
  <footer className="card-footer">
    
    <button onClick={handleEdit} className="card-footer-item">Edit</button>
    <button onClick={handleDelete} className="card-footer-item">Delete</button>
  </footer>
</div>
            
           
            
            </div>
    )
}

export default ListShow;