import { useState } from "react";

let nextId=2;

export default function List(){
    const [name, setName]=useState('');
    const [artists, setArtists]= useState([]);

    function updateName(e){
        setName(e.target.value);
    }

    function updateList(){
        if(name !== ''){
            setArtists([
                ...artists,
                {id: nextId++, name: name}
            ]);
        }
        setName('');
    }
    
    function reverse(){
        const nextArtists=[...artists];
        nextArtists.reverse();
        setArtists(nextArtists);
    }
    // function deleteList(){
    //     setArtists(
    //         artists.slice(0, artists.length-1)
    //     );
    // }    


    return (
        <>
            <h1>Aspiring Characters</h1>
            <input
                value={name}
                onChange={updateName}
            />
            <button
                onClick={updateList}
            >Add</button>
            <button
                onClick={reverse}
            >Reverse</button>
            <ul>
                {artists.map(artist=>(
                    <li key={artist.id}>
                        {artist.name}
                        <button onClick={()=> 
                            setArtists(artists.filter(a=> artist.id !== a.id))
                        }>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}