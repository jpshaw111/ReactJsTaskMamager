import TaskList  from "./components/TaskList";
import ListCreate from "./components/ListCreate";
import { useContext, useEffect } from "react";
import ToDoListContext from "./context/tasks";
function App() {

  const { fetchTasks, toDoTasks } = useContext(ToDoListContext);

  useEffect(() => {
    fetchTasks()
  }, [toDoTasks]);
  

  return (
    <div>
      <ListCreate />
      <TaskList />
    </div>
  )
}

export default App
