import { useState } from "react"


function App() {
  const [color, setColor]= useState("olive")

  return (
    <>
        <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}
        >

          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button className="outline-none px-4 rounded-3xl bg-red-800 font-bold text-white hover:bg-red-400"
              onClick={()=> {setColor("red")}}
              >Red</button>
              <button className="outline-none px-4 rounded-3xl font-bold  text-white"
              style={{backgroundColor: "Green"}}
              onClick={()=> {setColor("green")}}
              >Green</button> 
              <button className="outline-none px-4 rounded-3xl font-bold  text-white"
              style={{backgroundColor: "Blue"}}
              onClick={()=> {setColor("blue")}}
              >Blue</button>
            </div>
          </div>
        </div>

    </> 
  )
}

export default App