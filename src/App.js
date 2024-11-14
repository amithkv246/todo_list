import { useState } from "react"

export default function App() {
  
  const [todos, setTodo] = useState([
    "Learn React JS", 
    "Learn Angular JS", 
    "Learn React Native" 
  ])
  
  return(
    <>     
      <div>
        {
          todos.map(
            (item, index) => ( <p key={index+"todos"}>{item}</p> )
          )
        }
      </div>
    </>
  )  
}