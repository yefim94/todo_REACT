const AddTask = ({todos, setTodos, setInputText, inputText}) => { // passing in prop for state
  const inputTextHandler = (e) => { //when the input val changes it will log it and also upd
    setInputText(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { 
        text: inputText,
        stared: false,
        id: Math.random() * 200
      }
    ])
    setInputText("")
  }
  return (
      <form className="add-task-cont" onSubmit={submitHandler}>
        <button className="left-add" type="submit">
          <i class="fas fa-plus"></i>
          <h3>Add Task </h3>
        </button>
        <div className="right-add">
        <input type="text"  onChange={inputTextHandler} value={inputText}/>
        </div>
      </form>
  )
}

export default AddTask
