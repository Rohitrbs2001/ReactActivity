import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todolist() {
    let [todos, setTodos] = useState([{ task: "Sample task", id: uuidv4() }]);
    let [newtodo, setnewtodo] = useState("");

    let addNewtask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newtodo, id: uuidv4() }]
        });
        setnewtodo("");
    }

    let updateTodovalue = (event) => {
        setnewtodo(event.target.value);
    };

    let keypressed = (event) => {
        if (event.key == "Enter") {
            console.log("key pressed", event.key);
            setTodos((prevTodos) => {
            return [...prevTodos, { task: newtodo, id: uuidv4() }]
        });
            setnewtodo("");
        }
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }


    let upperCaseAll = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                return {
                    ...todo, task: todo.task.toUpperCase(),
                };
            })
        );
    };

    return (
        <>
            <input type="text" placeholder="Add task" value={newtodo} onChange={updateTodovalue} onKeyDown={keypressed} />
            <br />
            <button onClick={addNewtask}>Add Task</button>
            <br /><br /><br /><br /><br />
            <hr />

            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo) =>
                        <li key={todo.id}>
                            <span>{todo.task} </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </li>
                    )
                }
            </ul>
            <button onClick={upperCaseAll}>ToUpperCase</button>
        </>
    )
}