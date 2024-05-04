import React, { useEffect, useState } from 'react'
import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'

const App = () => {


const [todos,setTodos]=useState([])

const [todoValue,setTodovalue]=useState('')


let persist=(newList)=>{
  localStorage.setItem('todos', JSON.stringify({todos:newList}))
}

  let handelAddTodos =(newtodos)=>{
    let newTodo =[...todos,newtodos]
    persist(newTodo)
    setTodos(newTodo)

  }
  let handelDeleteTodos=(index)=>{
      const newTodolist=todos.filter((todo,todoIndex)=>{
          return todoIndex !==index
      })
      persist(newTodolist)
      setTodos(newTodolist)
  }

  let handelEditTodos=(index)=>{
    const valueTobeEdited=todos[index]
    setTodovalue(valueTobeEdited)
    handelDeleteTodos(index)
    
  }
 
  useEffect(()=>{
    if(!localStorage)
      return

    let localtodos =localStorage.getItem('todos')
    if(!localtodos)
      return

    localtodos=JSON.parse(localtodos).todos
    
    setTodos(localtodos)
      
  },[])
  return (
    <>
      <Todoinput todoValue={todoValue} setTodovalue={setTodovalue} 
      handelAddTodos={handelAddTodos}
      />
      <Todolist 
      handelEditTodos={handelEditTodos} 
      handelDeleteTodos={handelDeleteTodos} 
      todos={todos}/>
    </>
  )
}

export default App
