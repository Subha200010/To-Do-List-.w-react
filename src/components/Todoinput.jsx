import React from 'react'

const Todoinput = (props) => {
  let {handelAddTodos,todoValue,setTodovalue}=props
  

  

  return (
    <header>
      <input 
       value={todoValue} 
       onChange={(e)=>{
        // console.log(e.target.value);
        setTodovalue(e.target.value)
        }} 
       placeholder='enter your task'/>

      <button onClick={()=>{
      
         handelAddTodos(todoValue)
         setTodovalue('')
      }}
      
      >ADD</button>
    </header>
  )
}

export default Todoinput
