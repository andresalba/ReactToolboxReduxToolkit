import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import './Counter.css'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='counter_cont'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className='counter_btn_inc'
        >
          Increment
        </button>
        <span className='counter_text'>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className='counter_btn_dec'
        >
          Decrement
        </button>
      </div>
    </div>
  )
}