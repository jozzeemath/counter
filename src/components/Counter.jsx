import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {

const[range , setrange] = useState("")
  const dispatch =useDispatch()
  const count = useSelector((state)=>state.counter.value)

  return (
    <>
    <div className='d-flex align-items-center justify-content-center w-100  mt-5 flex-column mb-5'><h1 className=' text-primary'>{count}</h1>
    <div className='mt-5'>
    <button onClick={()=> dispatch(increment(Number(range)))}  className='btn btn-warning p-3 ' >Increment</button>
      <button onClick={()=> dispatch(decrement(Number(range)))} className='btn btn-danger p-3 ms-3'>Decrement</button>
      <button onClick={()=> dispatch(reset())}className='btn btn-success p-3 ms-3' >Reset</button>
    </div>
    
    </div>
    
    <div>
      <input onChange={(e)=>setrange(e.target.value)} type="text" className='form-control w-100 mt-3' placeholder='enter the range' />
    </div>
    </>
  )
}

export default Counter