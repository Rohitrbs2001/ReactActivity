import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todolist() {
    let [todos, setTodos] = useState([{ task: "Sample task", id: uuidv4(), isDone: false }]);
    let [newtodo, setnewtodo] = useState("");

    let addNewtask = () => {
        setTodos((prevTodos) => [
            ...prevTodos, { task: newtodo, id: uuidv4(), isDone: false }
        ]);
        setnewtodo("");
    };

    let updateTodovalue = (event) => {
        setnewtodo(event.target.value);
    };

    let keypressed = (event) => {
        if (event.key === "Enter") {
            setTodos((prevTodos) => [
                ...prevTodos, { task: newtodo, id: uuidv4(), isDone: false }
            ]);
            setnewtodo("");
        }
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== id)
        );
    };

    let upperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo, task: todo.task.toUpperCase()
            }))
        );
    };

    let upperCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, task: todo.task.toUpperCase() }
                    : todo
            )
        );
    };

    let markDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, isDone: !todo.isDone }
                    : todo
            )
        );
    };

    return (
        <>
            <input
                type="text"
                placeholder="Add task"
                value={newtodo}
                onChange={updateTodovalue}
                onKeyDown={keypressed}
            />
            <br />
            <button onClick={addNewtask}>Add Task</button>
            <br /><br /><hr />

            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo) =>
                        <li key={todo.id}>
                            <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
                                {todo.task}
                            </span>
                            &nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button onClick={() => markDone(todo.id)}>Mark As Done</button>
                            <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button>
                        </li>
                    )
                }
            </ul>
            <button onClick={upperCaseAll}>ToUpperCase</button>
        </>
    );
}
