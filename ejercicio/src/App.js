import React, {useState, useRef} from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4} from "uuid";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function App(){
    const [listas, setListas] = useState([{id:"1", task:"Tarea", completed:false},]);
    const taskRef = useRef();
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
            <div className="card">
                <div className="card-header">
                    <h3>Lista de Tareas</h3>
                </div>
                <div className="card-body">
                    <TodoList listas= {listas}/>
                    <input ref={taskRef} type="text" placeholder="Nueva Tarea"/>
                    <button onClick={AgregarTareas}>Agregar</button>
                    <button>Eliminar</button>
                </div>
            </div>
        </div>
    );
}