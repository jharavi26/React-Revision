import React, { useState } from 'react'

function List() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e)=>{
    setText(e.target.value);
    
    
  }

  const handleClick  = ()=>{
    setTodo((prev)=>[...prev, text]) 
    setText("")
  }

  const handleDelete = (index)=>{
    const newData = todo.filter((item, i) => i !== index );
    setTodo(newData);
  }


  return (
    <div className='app'>
      <div className='container'></div>
      <input type = "text" placeholder='Enter the todo' value={text} onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>

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
