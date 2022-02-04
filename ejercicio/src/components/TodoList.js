import React from "react";
import { TodoItem } from "./TodoItem"; 

export function TodoList(props){
    const listas = props.listas;
    const listatareas = listas.map(p =>
        <TodoItem id={p.id} task={p.task} completed={p.completed} />
    );
    return(
        <ul>
            {listatareas}
        </ul>
    );
}