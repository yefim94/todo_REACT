import React, { useState, useEffect, createContext , useRef, useReducer, useMemo, useCallback, useLayoutEffect, useDebugValue} from 'react';
import './index.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App () {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]); //todos state with empty array
  // this peice of state manages the value of the input feild
  const [isClear, setIsClear] = useState(false);
  return (
   <>
     <Tasks  
     todos={todos} 
     setTodos={setTodos}
     isClear={isClear} 
     setIsClear={setIsClear} /> {/* sets up the task cards*/}
     <AddTask  
     todos={todos} 
     setTodos={setTodos} 
     setInputText={setInputText} 
     inputText={inputText} 
     />
     {/* sets up the task submit*/}
   </>
  )
}
export default App;