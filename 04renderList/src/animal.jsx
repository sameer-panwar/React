function Animal(){
    
    const animals= ["lion", "Tiger", "Snake", "Cow"]
    const array= animals.map(animal => <li key={animal}>{animal}</li>)
    return (
    <>
        <h2>Animals are:</h2>
        <ul>
            {array}
        </ul>
    </>
    )
}


export default Animal