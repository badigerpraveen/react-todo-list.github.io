import React from "react"; 
import {useState} from 'react';

function  Todo(){ 
 const [todolist , setTodolist] = useState("To do list");
 const [newTask, setNewtask] = useState([])
 //const textId = todolist.indexOf(todolist.length-1).id+1;
 const onSubmithandler = (e)=>{ 
    e.preventDefault(); 
    
    const newData = {
        id :newTask.length + 1,
        taskName: todolist
    }
    console.log(newData.id +" "+ newData.taskName) ;
    //const newData = todolist ;
    setNewtask([...newTask,newData]); 
    //console.log(todolist.length);
    setTodolist('');
    
  
 } 

 const onchangehandle = (e) =>{
    setTodolist(e.target.value) ; 
    
 } 
                
 const deletTask = (id) =>{                    
    // console.log("click"); 
   // console.log(itemName.id+" "+ itemName.taskName );
    setNewtask( newTask.filter((task)=>{
         //  console.log(itemName);
           // console.log(a);
           return task.id !== id ;
     }) )
     
         
 }
    return(<>
        <h1>To Do App </h1> 
         <form onSubmit={onSubmithandler}>
         <input type='text' value={todolist}  onChange={onchangehandle}  id="task" name=" "/>  
         <button type="submit" > Add </button>
         </form>
         <div> {newTask.map((task,index)=>{ 
                    //  console.log(index);
               return ( <> 
                <h2 key={index} id={index} > {task.id} {task.taskName}   <button onClick={() => deletTask(task.id)}> x </button> </h2>  
                      
                   </> ) 
         })}</div>
    </>)
}


export default Todo ;