import { useState } from "react"
import Input from "./components/input"
import Button from "./components/button"
import Heading1 from "./components/heading"
import Card from "./components/card"

export default function App() {

  const [todos, setTodo] = useState([
    "Learn React JS",
    "Learn Angular JS",
    "Learn React Native"
  ])

  return (
    <>
      <div className="container my-2">
        <Heading1 value={"TODO LIST"} className="text-center" style={{ color: "#255cd1" }} />
        <div className="d-flex gap-3 py-3">
          <Input type={"text"} placeholder={" type something you want to do . . . "} />
          <Button value={"Add"} />
        </div>
        <div className="d-flex gap-3">
          {
            todos.map((item, index) => (
              <div key={index + "todos"}>
                <Card item={item} index={index}/>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
