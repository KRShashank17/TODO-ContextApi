import { useState , useEffect} from 'react'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos( (alltodos) => [...alltodos , { ...todo , id : Date.now()} ] )
  }

  const updateTodo = (id, newtodo) => {
    setTodos( (alltodos) => alltodos.map((prevtodo) => prevtodo.id === id? newtodo : prevtodo) )
  }

  const deleteTodo = (id) => {
    setTodos( (alltodos) => alltodos.filter((prevtodo) => prevtodo.id!== id) )
  }

  const toggleTodo = (id) => {
    setTodos( (alltodos) => alltodos.map( (eachtodo) => eachtodo.id === id ? {...eachtodo , completed : !eachtodo.completed} : eachtodo))
  }


        // LOCAL STORAGE (stores as "STRING") - getItem , setItem
  useEffect(() => {
    const todos = localStorage.getItem('todos');

    if (todos && todos.length > 0) {
      setTodos(JSON.parse(todos))           // string to JSON
    }
  
  }, [])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))    // JSON to string
  } , [todos])
  
  return (
    <TodoProvider value={{todos , addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
