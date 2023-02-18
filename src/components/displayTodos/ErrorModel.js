import React from 'react'
import classes from './Error.module.css'

function ErrorModel(props) {
  return (
    <div>
        <div className={classes.backdrop}/>
    <div className={classes.modal}>
        <header className={classes.header}><h2>{props.title}</h2></header>
        <div className={classes.content}>
            <p>{props.error}</p>
        </div>
        <footer className={classes.actions}>
            <button onClick={props.onClose}> Close</button>
        </footer>
    </div>
    </div>
    
  )
}

export default ErrorModel