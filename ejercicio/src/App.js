import React, {useState, useRef} from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4} from "uuid";
import "./index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function App(){
    const [listas, setListas] = useState([{id:1, task:"Tarea", completed:false},]);
    //Referencia para obtener a la data ingresada y usarla en el handle 
    const taskRef = useRef();
    // Esta funcion es para manejar el checkbox
    const toggelTask = (id) => {
        // realizar una copia de las tareas en newTasks
        const newTasks = [...listas];
        // Buscar la tarea donde el id de la tarea sea igual al id
        // y se le asigna a la variable task
        const task = newTasks.find((task) => task.id === id);
        // si la tarea esta completa la convierte en NO completa
        // y si NO esta completa la convierte en completa
        task.completed = !task.completed;
        // Se actualiza el listado de las tareas
        setListas(newTasks);
    };
    const AgregarTareas = () =>{
        const task = taskRef.current.value;
        if (task === "") return;
        setListas ((prevTasks) =>{
            return [...prevTasks, {id: uuidv4(), task, completed:false}];
        });
        taskRef.current.value = null // Limpiar el input
    };
    return (
        <div className="container py-5">
            <div className="card text-dark bg-warning">
                <div className="card-header text-center">
                    <h3>Lista de Tareas</h3>
                </div>
                <div className="card-body">
                    <TodoList listas= {listas} toggelTask={toggelTask}/>
                    <input ref={taskRef} type="text" placeholder="Nueva Tarea"/>
                    <button onClick={AgregarTareas}>Agregar</button>
                    <button>Eliminar</button>
                </div>
            </div>
        </div>
    );
}