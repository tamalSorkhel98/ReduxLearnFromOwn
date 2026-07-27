import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementBy5 } from './redux/featuress/counterSlice'

const App = () => {
  const [num, setNum] = useState(0);
  const dispatch=useDispatch()
  const count = useSelector(state=>state.counter.value)
  return (
    <div>
      <h1>count - {count}</h1>
      <h2>num - {num}</h2>
      <input type="number" value={num}
      onChange={(e)=>{
        setNum(e.target.value)
      }}
      />
      <button onClick={()=>{
        dispatch(increment())
      }}>Increment</button>
      <button>Decrement</button>
      <button onClick={()=>{
        dispatch(incrementBy5())
      }}>inceby5</button>

    </div>
  )
}

export default App
