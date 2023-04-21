import { useState } from "react";
import EditTodo from "./EditTodo";

export default function TodoItem({todo, deleteTodo, updateTodo}) {
  const [edit, setEdit] = useState(false);

  console.log(edit);

  const handleEdit = () => {
    setEdit(!edit)
  }

  async function modifyTodo(newTodo) {
    console.log({newTodo});
    try {
      const response = await fetch("https://todo-list-nrd2.onrender.com/modifyTodo", {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (response.ok) {
        const newTodo = await response.json();
        updateTodo(newTodo)
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (edit) {
    console.log(todo);
    return (  
      <li className="d-flex align-items-center mb10">
        <EditTodo todo={todo} handleEdit={handleEdit} updateTodo={updateTodo}/>
      </li>
    );
  } else {
    return (
      <li className="d-flex align-items-center mb10">
        <span className="flex-fill mr10">
          {todo.content} {todo.done && "✔️"}
        </span>
        <button onClick={() => modifyTodo({...todo, done: !todo.done})} className="btn btn-primary mr10">{todo.done ? "Réalisé" : "A faire"}</button>
        <button onClick={() => modifyTodo({...todo, edit: !todo.edit})} className="btn btn-primary mr10">Modifier</button>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-primary-reverse mr10">Supprimer</button>
      </li>
    );
  }
}