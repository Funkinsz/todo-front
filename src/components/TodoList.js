import TodoItem from './TodoItem'

export default function TodoList({todoList, deleteTodo, updateTodo}) {
  return todoList.length ? (
    <div>
      <ul>
        {todoList.map((todo, i) => (
          <TodoItem key={i} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <p>Aucune todo pour le moment</p>
    </div>
  );
}
