import React from 'react'

const Todocard = (props) => {
  const {children,handelDeleteTodos,index,handelEditTodos} =props
  return (
    <div>
       <li className='todoItem' >
        {children}
        <div className='actionsContainer'>


             <button onClick={()=>{
              handelEditTodos(index)
             }}>
             <i className="fa-solid fa-pen-to-square"></i>
              </button> 

              <button
               onClick={()=>{
                handelDeleteTodos(index)
              }}
              >
          <i className="fa-solid fa-trash"></i>
          </button>
           
              </div>
              
            </li>
    </div>
  )
}

export default Todocard
