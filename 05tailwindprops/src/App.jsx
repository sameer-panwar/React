import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-green-500 text-white p-3 rounded-xl'>Here we go with tailwind</h1>
      <Card username="Sameer" btnText="Click here"/>
      <Card username="Aryan" btnText="visit me"/>
    </>
  )
}

export default App
