import {useState} from 'react';

export default function AddTodo({addTodo}) {
  const [value, setValue] = useState('')

  function handleChange(e) {
    const todoValue = e.target.value
    setValue(todoValue)
  }

  async function handleClick() {
    const valueTrim = value.trim()
    if (valueTrim.length) {
      console.log(valueTrim);
      // requete backend
      try {
        const response = await fetch('https://todo-list-nrd2.onrender.com/addTodo', {
          method: "POST",
          body: JSON.stringify({
            content: valueTrim,
            done: false,
            edit: false
          }),
          headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
          const todo = await response.json()
          addTodo(todo)
        }
      } catch (error) {
        console.error(error);
      }
      setValue('')
    } else {
      setValue('')
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center mb20'>
        <input 
          type="text" 
          value={value}
          placeholder="add a todo"
          className='mr20 flex-fill p10'
          onChange={handleChange} />
        <button onClick={handleClick} className='btn btn-primary'>ADD</button>
    </div>
  );
}
