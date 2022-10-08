import React, { useState } from "react"

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
  };
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <h1>ToDo List</h1>
        <input type = "text" placeholder="Add a task" onChange={itemEvent}/>
        <button onClick={Add}> + </button>
        <ol>
          {list.map((listVal) => {
            return <li>{listVal}</li>
          } )}
          
        </ol>
      </div>


    </div>
    </>
  )

};

export default App;