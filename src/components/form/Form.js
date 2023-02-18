import React, { useState } from 'react'
import ErrorModel from '../displayTodos/ErrorModel'
import classes from './Form.module.css'



function Form(props) {

    const [title,setTitle] =useState('')
    const [date,setDate]= useState('')
    const [todos,setTodos]= useState('')
    const [error,setError]=useState(false)
    const [errorMessage,setErrorMessage]=useState()
    const onSubmitHandler =e=>{
        e.preventDefault();
        if(title.trim().length < 6 || todos.trim().length <10 ){
            setError(true)
            return setErrorMessage({
                title:'invalid Title or Todo',
                error:'Title length !<6 && todo length cant be !<10'})
             
        }
        if( date.length <9){
            setError(true)
            return setErrorMessage({
                title:'invalid Date',
                error:'Date cannot be empty'})
            
        }
        const todolist ={
            id: new Date().getTime().toString(),
            title:title,
            date:date,
            todo:todos
        }
        console.log(todolist.id)
        props.todosData(todolist)
        setDate('')
        setTitle('')
        setTodos('')

    }
    const titleHandler =e=>{
        setTitle(e.target.value)
    }
    const dateChangeHandler =e=>{
        setDate(e.target.value)
    }
    const todoChangeHandler=e=>{
        setTodos(e.target.value)

    }
    const errorOnClose =()=>{
        setError(false)
    }
  return (
    <div>
        {error &&<ErrorModel title={errorMessage.title} error={errorMessage.error} onClose={errorOnClose}/>}
        <div className={classes.divForm}>
        <form onSubmit={onSubmitHandler}>
            <label>
                Title:
                <input type={'text'} value={title} onChange={titleHandler}/>
            </label>
            <label>
                Date:
                <input onChange={dateChangeHandler} value={date} type={'date'}/>
            </label>
            <label>
            AddToDo:
                <textarea value={todos} onChange={todoChangeHandler} />
            </label>
            
            <button>Submit</button>



        </form>
    </div>
    </div>
    
  )
}

export default Form