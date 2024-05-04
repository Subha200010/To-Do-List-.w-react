import React from 'react'
import Todocard from './Todocard'

const Todolist = (props) => {
 
   const {todos}= props
  
  return (
    <ul className='main'>
      {todos.map((todo,todoIndex)=>{
         return(
          <Todocard {...props} key={todoIndex} 
          index={todoIndex}>
            {todo}
          </Todocard>
         )
      })}
    </ul>
  )
}

export default Todolist
