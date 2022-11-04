import React from 'react'
import ToDoItem from "./ToDoItem";

export const List = (props) => {
  let mystyle={
     minHeight: "70vh",
     margin: "40px auto"
  }
  return (
    <div className="container" style={mystyle}>
      <h2 className="my-5">Tasks To Do</h2>

      {(props.lists.length===0)?<h6 className="my-5">Add the Pending Tasks.</h6>:
      props.lists.map((todo)=>{
        return (
          <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        )
      })}
    </div>
  )
}

export default List