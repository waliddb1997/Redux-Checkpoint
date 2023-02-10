import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/taskSlice/TaskSlice';

const Header = () => {
    const [newTask, setnewTask] = useState({description:""});
    const dispatch=useDispatch()
  return (
    <div className='header'>
        <input defaultValue={newTask.description} type="text" placeholder='TO DO Task' onChange={(e)=>setnewTask({...newTask,description:e.target.value})}/>
        <button onClick={()=>{
            dispatch(addTask(({...newTask,isDone:false,id:Math.floor(Math.random()*1000000000)})))
            setnewTask({description:""})
            }}>ADD</button>
    </div>
  )
}

export default Header