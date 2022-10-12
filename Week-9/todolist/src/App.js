import React, { useState } from "react"
import todolist from "./todolists"

const App = ()=>{
  const [inputList, setInputList] = useState("");
  const [list, setList] = useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value)
  };
  const Add= ()=>{
    setList((oldTask)=>{
      return [...oldTask,inputList]
    })
    setInputList("");
  };
  const deleteTask=(id)=>{
    console.log("working")
    setList((oldTask=>{
      return oldTask.filter((arr,index)=>{
        return index !==id;
      })
    }))
  }
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <h1>ToDo List</h1>
        <input type = "text" placeholder="Add a task" onChange={itemEvent} value={inputList}/>
        <button onClick={Add}> + </button>
        <ul>
          {list.map((listVal,index) => {
            let id=index;
            let key=index;
            return (
            <>
            <div className="todo_style">
              <i className="fa fa-times-circle" aria-hidden="true" onClick={()=>{deleteTask(id)}} /> &nbsp; &nbsp; 
            <li>{listVal}</li></div></>);
          } )}
          
        </ul>
      </div>


    </div>
    </>
  )

};

export default App;