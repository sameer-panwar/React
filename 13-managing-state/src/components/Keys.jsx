import { useState } from "react";


export default function OnKeyPressed(){
    const[key, setKey]=useState('');

    function handleKey(e){
        setKey(e.target.value);
    }
    return(<>
        <input
            value={key}
            onChange={handleKey}
        />
        <p>{key}</p>
    </>);
}