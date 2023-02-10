import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask:(state,action)=>{
        state.push(action.payload)
    },
   deleteTask:(state,action)=>{
    return state.filter((el)=>el.id !== action.payload.id)

   },
   editTask:(state,action)=>{
    console.log(action.payload)
    
    return state.map((el)=>el.id === action.payload.id ? action.payload:el)
   }
  },
})

// Action creators are generated for each case reducer function
export const { addTask , deleteTask , editTask } = TaskSlice.actions

export default TaskSlice.reducer