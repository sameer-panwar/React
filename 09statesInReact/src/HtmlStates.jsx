import { useState } from "react";

function CustomInput(){
    const [value, setValue]= useState("");

    return(
        <>
        <input
        type="text"
        value={value}
        onChange={(event)=> setValue(event.target.value)}
        />
        <h2>hello</h2>
        </>
    )
}

export default CustomInput;