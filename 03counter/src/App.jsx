import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  //let counter=5;

  const addValue=()=>{
    console.log(counter, Math.random());
    counter++;
    setCounter(counter)
  }

  const removeValue=()=>{
    counter--;
    if(counter>=0){
    setCounter(counter)
    }else if(counter<0){
      counter=0
    }
  }

  return (
    <>
      <h1>Hello Programmers</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>final: {counter}</p>
    </>
  )
}

export default App
