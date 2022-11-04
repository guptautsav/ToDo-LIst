import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import ToDoList from "./MyComponents/ToDoList";
import AddToDo from "./MyComponents/AddToDo";
import About from "./MyComponents/About";
import React, { useState, useEffect } from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("list")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("list"));
  }

  const onDelete=(todo)=>{
    console.log("You're done with task: ", todo.title);
    alert("Kudoos to U :)");

    update(list.filter((e)=>{
      return e!==todo ;
    }));

    console.log("Task ", list.title, " is Done")
    localStorage.setItem("list", JSON.stringify(list));
  }

  const addtodo=(Title, Desc)=>{
    console.log("I am adding this todo,", Title)
    let Sno;
    if(list.length===0) Sno=1;
    else Sno=list[list.length-1].sno+1;

    const mytodo={
      sno: Sno,
      title: Title,
      desc: Desc,
    }
    update([...list, mytodo])
    console.log(mytodo);
  }
  
  const [list, update] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(list));
  }, [list])

  return (
    <>
    <Router>
      <Header title="My ToDo List" searchBar={true}/>
       
      <Switch>
        <Route exact path="/" render={()=>{
          return(
          <>
          <AddToDo addtask={addtodo}/>
          <ToDoList lists={list} onDelete={onDelete}/>
          </>)
        }}>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;