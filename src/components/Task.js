import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../Redux/taskSlice/TaskSlice'

const Task = ({task}) => {
    const dispatch=useDispatch()
    const [onUpdate, setOnUpdate] = useState(false)
    const [newTask, setnewTask] = useState(task)
  return (
    <div
     className={`task ${task.isDone ? 'done' : "notdone"}`}
     onClick={()=>dispatch(editTask({...newTask, isDone:!task.isDone}))}

     
     >
        {onUpdate 
        ? <> <input className='confirm' type={"text"} defaultValue={task.description} onChange={(e)=> setnewTask({...newTask,description:e.target.value})}/>
        <div>
          
        
        <button onClick={()=>{
          dispatch(editTask(newTask))
          setOnUpdate(false)}}>Confirm</button>
        <button onClick={()=>setOnUpdate(false)}>Cancel</button>
        
        </div>
        </>
         :<> <h2>{task.description}</h2>
         <div>
          
        <button onClick={()=>setOnUpdate(true)} >Update</button>
        <button id='close' onClick={()=>dispatch(deleteTask(task))} >X</button>
        </div></>}
    </div>
  )
}

export default Task