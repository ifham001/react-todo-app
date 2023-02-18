import React from 'react'
import classes from './Single.module.css'

function SingleTodo(props) {
  return (
    <div className={classes.todoDiv}>  
        <ul className={classes.todo} >
            <li> <p>Date:</p>
                {props.date}
            </li>
            <li> 
            <p>Title:</p>
                {props.title}</li>
            <li>
            <p>Todo:</p>
                {props.todo}</li>

            <button 
            
            onClick={props.onClick.bind(null,props.id)}>COMPLETED TODO</button>
        </ul>
         
         
         
    </div>
  )
}

export default SingleTodo