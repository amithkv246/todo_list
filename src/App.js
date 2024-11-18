import { useState } from "react"
import Input from "./components/input"
import Button from "./components/button"
import Heading1 from "./components/heading"
import Card from "./components/card"

export default function App() {

  const [todos, setTodo] = useState([])
  const [input, setInput] = useState("hi")
  function handleAdd() {
    // setTodo([...todos, input])
    setTodo((prevArray) => [...todos, input])
  }
  return (
    <>
      <div className="container my-2">
        <Heading1 value={"TODO LIST"} className="text-center" style={{ color: "#255cd1" }} />
        <div className="d-flex gap-3 py-3">
          <Input type={"text"} placeholder={" type something you want to do . . . "} />
          <Button value={"Add"} onClick={handleAdd} />
        </div>
        <div className="grid row">
          {
            todos.length > 0 ?
              todos.map((item, index) => (
                <div className="col-3 p-1"><Card item={item} key={index + "todos"} /></div>
              ))
              :
              (<div><p>Nothing to show.</p></div>)
          }
        </div>
      </div>
    </>
  )
}
