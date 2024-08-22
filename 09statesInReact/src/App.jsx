import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){

  const [person, setperson] = useState({name:"John", age:18})

  /*const handleIncreaseAge=()=> {
    person.age=person.age+1;
    setperson(person)
  }*/

  /*const handleIncreaseAge=()=> {
    const newPerson={name: person.name, age:person.age +1}
    setperson(newPerson);
  };*/



  return (  
    <>
    <h1>{person.name}</h1>
    <h2>{person.age}</h2>
        <button
        >Click</button>
    </>
  )
}

export default App
