import React from "react";

export function TodoItem(props, toggelTask) {
    const handleTaskClick = () =>{
        toggelTask(props.id);
    };
    return (
        <li>
            <input type={"checkbox"} checked={props.completed} onChange={handleTaskClick}/>{props.task}
        </li>
    );
}