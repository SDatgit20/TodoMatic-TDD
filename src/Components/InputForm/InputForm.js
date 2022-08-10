import React, { useState } from "react";
// import setFilter from "../App.js";

function Form(props){
    //Form({addTask})
    const[name,setName]=useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        //addTask(name)
        setName('');
      }
    function handleChange(e){
        setName(e.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
        <input type="text" id="todo-input" data-testid="test-input" className="input" autoComplete="off" placeholder="Enter task" value={name} onChange={handleChange}></input>
        <button type="submit" data-testid="test-submit" className="btn btn-submit" >Add</button>
        </form>
    );
}

export default Form;

//try Form onSubmit
//add empty field check here
//refactor the variable names as taskName