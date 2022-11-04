import React, { useState } from "react";

const AddToDo = (props) => {
  const[title, setTitle] = useState("");
  const[desc, setDesc] = useState("");

  const addTask=(e)=>{
    e.preventDefault();
    if (!title || !desc){
      alert("Title or Description can't be blank")
    }
    else{
      props.addtask(title, desc);
      setTitle("");
      setDesc("");
    }
  }

  return (
    <div className="container my-3">
      <h2>Add a ToDo</h2>
      <form onSubmit={addTask}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">Task</label>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="task"/>
        </div>

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
        </div>

        <button type="submit" className="btn btn-sm btn-success">Add Task</button>
      </form>
    </div>
  );
};

export default AddToDo;
