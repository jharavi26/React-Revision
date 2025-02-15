import React, { useEffect, useState } from 'react'

function List() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState(()=>{
    const newTodo = sessionStorage.getItem("todo");
    return newTodo ? JSON.parse(newTodo) : [];
  });


  const handleChange = (e)=>{
    setText(e.target.value);  
  }

  useEffect(()=>{
    sessionStorage.setItem("todo", JSON.stringify(todo)); 
  },[todo])

  const handleClick  = ()=>{
    setTodo((prev)=>[...prev, text]) 
    setText("")
  }

  const handleDelete = (id)=>{
    const newData = todo.filter((item, index) => index !== id );
    setTodo(newData);
  }


  return (
    <div className='app'>
      <div className='container'></div>
      <input type = "text" placeholder='Enter the todo' value={text} onChange={handleChange}/>
      <button onClick={handleClick} style={{backgroundColor:"green", marginLeft:"20px"}}>Add</button>

      <ol>
        {
          (todo.length >= 0 && 
          todo.map((item, index)=>{
            return <li key={index}>{item}
            <button style={{marginLeft :"100px", backgroundColor:"red"}} onClick={()=>handleDelete(index)}>Delete</button></li>
          }))
        }
        

      </ol>
      
    </div>
  )
}

export default List
