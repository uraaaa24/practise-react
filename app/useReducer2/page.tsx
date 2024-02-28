"use client"

import { useReducer } from "react"

type State = {
  firstCounter: number
  secondCounter: number
}

type Action = {
  type: string
  value: number
}

const initialState = {
  firstCounter: 0,
  secondCounter: 10
}

const countReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT_1":
      return {...state, firstCounter: state.firstCounter + action.value}
    case "INCREMENT_2":
      return {...state, secondCounter: state.secondCounter + action.value}
    case "DECREMENT_1":
      return {...state, firstCounter: state.firstCounter - action.value}
    case "DECREMENT_2":
      return {...state, secondCounter: state.secondCounter - action.value}
    case "RESET":
      return initialState
    default:
      return {...state}
  }
}

const CountReducer2 = () => {
  const [state, dispatch] = useReducer(countReducer, initialState)

  return (
    <div>
      <p>firstCounter: {state.firstCounter}</p>
      <p>secondCounter: {state.secondCounter}</p>
      <br />
      <button onClick={() => dispatch({type: "INCREMENT_1", value: 10})}>+10</button>
      <button onClick={() => dispatch({type: "INCREMENT_2", value: 10})}>+10</button>
      <button onClick={() => dispatch({type: "DECREMENT_1", value: 10})}>-10</button>
      <button onClick={() => dispatch({type: "DECREMENT_2", value: 10})}>-10</button>
      <button onClick={() => dispatch({type: "RESET", value: 0})}>reset</button>
    </div>
  )
}

export default CountReducer2
