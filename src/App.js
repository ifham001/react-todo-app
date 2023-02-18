import React, { useState } from 'react'


import SingleTodo from './components/displayTodos/SingleTodo/SingleTodo'
import Form from './components/form/Form'





function App() {
  const [todoData,setTodoData]=useState([])
  
  const todosData=data=>{
   setTodoData(todoData.concat(data))

  }
  const onClickRemove =id=>{
      console.log(id)
      const updateTodo =todoData.filter((element)=>{
        return element.id !== id
      })
      setTodoData(updateTodo)
  }


  return (
    <div>
      <h1>Todo App</h1>
      <Form todosData={todosData}/>
      {todoData.map(data=>{
            return <SingleTodo
            onClick={onClickRemove.bind(null,data.id)}
            key={data.id}
             title={data.title}
             date={data.date}
             todo={data.todo}
            />
        })}
        
        
    </div>
  )
}

export default App