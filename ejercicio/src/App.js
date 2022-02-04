import React from "react";
import { TodoList } from "./components/TodoList";

export function App(){
    const listas = [{id:"1", task:"Tarea 1", completed:false}];

    return (
        <div>
            <TodoList listas= {listas}/>
            <input type="text" placeholder="Nueva Tarea"/>
            <button>Agregar</button>
            <button>Eliminar</button>
        </div>
    );
}