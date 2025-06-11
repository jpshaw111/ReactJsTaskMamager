import { useContext } from "react";
import ToDoListContext from "../context/tasks";
import ListShow from "./ListShow";
function TaskList() {
    const { toDoTasks } = useContext(ToDoListContext);

    const renderedLists = toDoTasks.map((task) => {
        return <ListShow doTask={task} key={task.id} />

    })
    return(
        <div className="container mt-3">
            
            
            
            {renderedLists}</div>
    )
}

export default TaskList;