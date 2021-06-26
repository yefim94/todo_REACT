import {useState} from 'react'
const Task = ({text, completion, stared, todo, setTodos}) => {
  const [staredColor, setStaredColor] = useState("grey")
  const [completeColor, setCompleteColor] = useState("grey")
  const changeStaredHandler = (e) => {
    todo.stared = !todo.stared
    if(todo.stared) {
      setStaredColor("#F0E159")
    } else {
      setStaredColor("grey")
    }
  }
  const changeCompletionHandler = (e) => {
    if(completeColor === "grey") {
      setCompleteColor("#EB1DF0")
    } else {
      setCompleteColor("grey")
    }
  }
  return (
     <div className="task-card" >
      <i class="fas fa-check" style={{
        color: completeColor,
        fontSize: "1.5em",
        marginRight: "1em",
        transition: "all 1s linear"
      }} onClick={changeCompletionHandler}></i>
      <input className="taskText" defaultValue={text} />
      <i style={{
        color: staredColor,
        transition: "all 1s linear"
      }} class="fas fa-star" onClick={changeStaredHandler}></i>
    </div>
  )
}
export default Task