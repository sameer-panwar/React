
function App() {

  const animals= ["lion", "Tiger", "Snake", "Cow"]

  return (
   <>
      <h1>Animals</h1>
      <ul>
        {animals.map((animal)=>{
          return <li key={animal}>{animal}</li>
        })}
      </ul>
   </>
  )
}

export default App
