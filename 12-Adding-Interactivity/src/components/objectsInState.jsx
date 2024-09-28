import { useState } from "react";

export default function UpdateDetails(){
    const [person, setPerson]=useState({
        firstName: "Sameer",
        lastName: "Panwar",
        email: "Hwlloworld@gmail.com"
    });

    function handleFirstName(e){
        setPerson({
            firstName: e.target.value,
            lastName: person.lastName,
            email: person.email
        })
    }
    return(
        <>
        <label>
            First Name:
            <input
            value={person.firstName}
            onChange={handleFirstName}
            />
         </label>
         <label>
            Last Name:
            <input
            value={person.lastName}
            />
         </label>
         <label>
            Email:
            <input
            value={person.email}
            />
         </label>
         <h3><b>{person.firstName} {person.lastName}</b> has {person.email} id</h3>
        </>
    );
}