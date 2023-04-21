import styles from "./App.module.scss";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import {useEffect, useState} from 'react'

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    async function getTodoList() {
      try {
        const response = await fetch("https://todo-list-nrd2.onrender.com")
        if (response.ok) {
          const todos = await response.json()
          setTodoList(todos)
        }
      } catch (error) {
        console.error(error);
      }
    }
    getTodoList()
  }, [])

  function addTodo(todo) {
    setTodoList([...todoList, todo])
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  function updateTodo(newTodo) {
    setTodoList(todoList.map((t) => (t.id === newTodo.id ? newTodo : t)))
  }

  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.appContainer}`}
    >
      <div className={`card container p20 ${styles.content}`}>
        <h1 className="mb20">TODO LIST APP</h1>
        <AddTodo addTodo={addTodo}/>
        <TodoList 
          todoList={todoList} 
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
