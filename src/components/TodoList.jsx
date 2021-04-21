import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TodoList = () => {
  const [allTodo, setAllTodo] = useState([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    fetchAllTodos()
  }, [])

  async function fetchAllTodos() {
    const todos = await axios.get('http://localhost:3001/todos')
    setAllTodo(todos.data)
  }

  async function addToAllTodo() {
    const newTodo = await axios.post('http://localhost:3001/todos', {
      name: todo
    })
    setAllTodo(allTodo.concat(newTodo.data))
    setTodo('')
  }

  async function deleteTodo(id) {
    await axios.delete(`http://localhost:3001/todos/${id}`)
    setAllTodo(allTodo.filter(todo => todo.id !== id));
  }

  return (
    <div className="Todolist">
      <div>
        <input type="text" onChange={(e) => setTodo(e.target.value)} />
        <button onClick={addToAllTodo}>Ajouter</button>
      </div>
      <div>
        <h2>Mes todos:</h2>
        <div className='todos-container'>
          {allTodo.map(todo => (
            <div className='todos-item' key={todo.id}>
              <div>{todo.name}</div>
              <button onClick={() => deleteTodo(todo.id)}>Supprimer</button>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default TodoList;