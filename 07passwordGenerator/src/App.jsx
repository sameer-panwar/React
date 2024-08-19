import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState("")

  //use ref hook

  const passwordRef= useRef()

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghizklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-=_+{}[]"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length - 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClip= useCallback(()=>{
      window.navigator.clipboard.writeText(password)
  }, [password])

  const showPassword = useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full  max-w-md mx-auto shadow-md rounded-lg px-4 pb-4 my-8 text-orange-500 bg-gray-600 font-bold'>
        <h1 className='text-white text-center my-4 pt-2 text-2xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClip}
          >Copy</button>
        </div> 
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={6}
            max={18}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className='pr-4'>Length: {length}</label>
            <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=> !prev);
            }}
            />
            <label htmlFor='numberInput' className='pr-4'>Number</label>
            <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=>{
              setCharAllowed((prev)=> !prev);
            }}
            />
            <label htmlFor='charInput'>Character</label>
          </div>
        </div>
        <div className='text-center'>
          <button className=' text-center bg-red-500 text-black px-2 py-0.5 mt-8 mb-4 rounded-lg outline hover:bg-red-400 hover:outline-none active:bg-green-400'
          onClick={()=>{setPassword}}
          >Next Password</button>
          </div>
      </div>
    </>
  )
}

export default App