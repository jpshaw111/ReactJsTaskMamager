import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

const ToDoListContext = createContext();

const Provider = ( {children} ) => {
    const [toDoTasks, setToDoTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await axios.get("http://localhost:3001/lists");

        return setToDoTasks(response.data);

    }

    const createToDoList = async (task) => {
        const response = await axios.post("http://localhost:3001/lists", {
            task : task
        });

        setToDoTasks([
            ...toDoTasks,
            response.data
        ]);

    } 

    const deleteTaskById = async (id) => {
        await axios.delete(`http://localhost:3001/lists/${id}`);

        const updatedTasks = toDoTasks.map((task) => {
            return task.id != id

        });

        setToDoTasks(updatedTasks);

    }

    const editTaskById = async (id, newTask) => {
        const response = await axios.put(`http://localhost:3001/lists/${id}`, {
            task: newTask
        });

        const updatedTasks = toDoTasks.filter((task) => {

            if(task.id === id) {
                return {...task, task: newTask}
            }
            return task;

        });

        setToDoTasks(updatedTasks);

    }


    const valueToShare = {
            toDoTasks,
            createToDoList,
            fetchTasks,
            deleteTaskById,
            editTaskById
        }


    return <ToDoListContext.Provider value={valueToShare}>
            { children }
        </ToDoListContext.Provider>



}

export { Provider }

export default ToDoListContext;