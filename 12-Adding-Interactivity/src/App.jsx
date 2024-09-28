import { useState } from 'react'
import Toolbar from './components/HandleButtons';
import Tools from './components/stopPropgation';
import Gallery from './components/UseHook';
import UpdateDetails from './components/objectsInState';
import List from './components/arrayInState';


function App() {

  function handleClick(){
    alert('You Clicked Me');
  }
  return (<button onClick={handleClick}>Click Me</button>)
}

export default List
