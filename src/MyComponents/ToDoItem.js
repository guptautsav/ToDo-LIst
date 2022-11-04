import React from 'react'

const ToDo = ({todo, onDelete}) => {
  return (
    <>
    <div>
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>onDelete(todo)}>Mark as Done</button>
    </div>
    <hr/>
    </>
  )
}

export default ToDo