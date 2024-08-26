import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){

  const [person, setperson] = useState({name:"John", age:18})


  //bad code

   /*const handleIncreaseAge=()=> {
    person.age=person.age+1;
    setperson(person)
  }*/

    //right code
  /*const handleIncreaseAge=()=> {
    const newPerson={name: person.name, age:person.age +1}
    setperson(newPerson);
  };*/


  //we have to pass the previous object if we want to use callback
  const handleIncreaseAge=()=>{
    setperson((prevPerson)=>({name: prevPerson.name, age: prevPerson.age+1 }))
    console.log(setperson)
    setperson((prevPerson)=>({name: prevPerson.name, age: prevPerson.age+1 }))
    console.log(setperson)
  };


  return (  
    <>
    <h1>{person.name}</h1>
    <h2>{person.age}</h2>
        <button
        onClick={handleIncreaseAge}
        >Click</button>
    </>
  )
}

export default App
