import React from "react";

export function TodoItem(props) {
    return (
        <li>
            <input type="checkbox" checked={props.completed}/>{props.task}
        </li>
    );
}