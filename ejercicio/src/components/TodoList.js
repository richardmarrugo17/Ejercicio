import React from "react";
import { TodoItem } from "./TodoItem"; 

export function TodoList( props, toggelTask ){
    const listas = props.listas;
    const listatareas = listas.map(p =>
        <TodoItem key={props.id} id={p.id} task={p.task} toggelTask={toggelTask}/>
    );
    return(
        <ul>
            {listatareas}
        </ul>
    );
}