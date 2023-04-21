import { useState } from "react";

export default function EditTodo({todo, handleEdit}) {
  const [value, setValue] = useState(todo.content)

  function handleChange(e) {
    const todoValue = e.target.value
    setValue(todoValue)
  }

  function handleClick() {
    if (value.trim().length) {
      todo.content = value.trim()
      setValue('')
      handleEdit()
    } else {
      setValue('')
      handleEdit()
    }
  console.log(value);
  }

  function handleCancel() {
    handleEdit()
  }
  
  return (
    <div className='d-flex justify-content-center align-items-center mb20'>
      <input 
        type="text" 
        value={value}
        placeholder="add a todo"
        className='mr20 flex-fill p10'
        onChange={handleChange} />
      <button onClick={handleCancel} className='btn btn-primary-reverse'>Cancel</button>
      <button onClick={handleClick} className='btn btn-primary'>Valid</button>
    </div>
  );
}