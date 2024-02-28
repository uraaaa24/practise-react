"use client"

import { useReducer } from "react"

const initialState = 1

const countReducer = (state: number, action: string) => {
  switch (action){
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state -1
    case "RESET":
      return initialState
    default:
      return state
  }
}

const SimpleCountUp = () => {
  const [state, dispatch] = useReducer(countReducer, initialState)

  return <div>
    <p>{state}</p>
    <button onClick={() => dispatch("INCREMENT")}> + </button>
    <button onClick={() => dispatch("DECREMENT")}> - </button>
    <button onClick={() => dispatch("RESET")}> reset </button>
  </div>
}

export default SimpleCountUp
