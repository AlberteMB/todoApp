import { useState } from 'react'
import TodoApp from './TodoApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Todo app</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Go to the React.dev to learn more
      </p>
      <TodoApp />
    </>
  )
}

export default App
