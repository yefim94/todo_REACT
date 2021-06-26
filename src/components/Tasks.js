import React from 'react'
import {useEffect} from 'react'
import Task from './Task.js'

const Tasks = ({todos, isClear, setIsClear, setTodos, isStarred,setIsStarred}) => {
  const emptyTodoHandler = (e) => {
    setIsClear(!isClear);
    setTodos([]);
  }
  const textFade = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  useEffect(() => {
      if (isClear) {
        textFade(2000)
              .then((e) => setIsClear(false))
      }
  }, [isClear])
  
  // Html
  return (
    <div className="tasks-cont"> 
      <div className="tasks-top">
        <h1 style={{fontSize: "2.9em"}}>Tasks</h1>
        <div className="menu-cont">
        <i class="fas fa-trash-alt" onClick={emptyTodoHandler}></i>
        </div>
      </div>
      { isClear && <h3 style={{
         color: "white",
         fontSize: "2em",
         cursor: "pointer",
         marginBottom: "1em"
      }} className="fadeOut">Todos Deleted!</h3> }
      <div className="tasks" >
       {todos.map(todo => 
         <Task 
         setTodos={setTodos}
         todo={todo}
         completion={todo.complete}
         text={todo.text} 
         key={todo.id} />
       )}
      </div>
    </div>
  )
}

export default Tasks
