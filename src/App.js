import { useState } from "react"
import Input from "./components/input"
import Button from "./components/button"
import Heading1 from "./components/heading"
import Card from "./components/card"

export default function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")
  const [completedTodos, setCompletedTodos] = useState([])

  function handleAdd() {
    // setTodo([...todos, input])
    setTodos((prevArray) => [...todos, input])
    setInput("")
  }

  function handleDelete(index) {
    const newArray = todos.filter((_, i) => i !== index)
    setTodos(newArray)
  }

  function handleDone(index) {
    const newArray = todos.filter((_, i) => i !== index)
    setCompletedTodos((prevArray) => [...completedTodos, todos[index]])
    setTodos(newArray)
  }

  function handleCompletedDelete(index) {
    const newArray = completedTodos.filter((_, i) => i !== index)
    setCompletedTodos(newArray)
  }

  return (
    <>
      <Heading1 value={"TODO LIST"} className="text-secondary text-center mt-2" />
      <div className="container">
        <div className="d-flex gap-3 py-3">
          <Input type={"text"} placeholder={" type something you want to do . . . "} onChange={(e) => setInput(e.target.value)} value={input} />
          <Button value={"Add"} onClick={handleAdd} />
        </div>
        <div className="grid row">
          <div className="col-6 p-3">
            <p className="fs-3 text-primary">Tasks to do</p>
            <div className="grid row">
              {
                todos.length > 0 ?
                  todos.map((item, index) => (
                    <div className="col-5 p-1">
                      <Card item={item} key={index + "todos"} onDelete={() => handleDelete(index)} onDone={() => handleDone(index)} />
                    </div>
                  ))
                  :
                  (<div><p>Nothing to show.</p></div>)
              }
            </div>
          </div>

          <div className="col-6 p-3">
            <p className="fs-3 text-success" >Completed Tasks</p>
            <div className="grid row">
              {
                completedTodos.length > 0 ?
                  completedTodos.map((item, index) => (
                    <div className="col-5 p-1">
                      <Card item={item} key={index + "completedTodos"} onDelete={() => handleCompletedDelete(index)} />
                    </div>
                  ))
                  :
                  (<div><p>Nothing to show.</p></div>)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
