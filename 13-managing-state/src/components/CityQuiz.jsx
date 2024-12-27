import { useState } from "react";

export default function Quiz(){

    const [status, setStatus]=useState("empty");
    const [answer, setAnswer]=useState("");
    const [error, setError]= useState("");

    if(status === "success"){
        return<h1>Right Answer!</h1>
    }

    async function handleSubmit(e){
        e.preventDefault();
        setStatus("submitting");
        try{
            await formSubmit(answer);
            setStatus("success");
        }catch(err){
            setStatus("typing");
            setError(err)
        }
       
    }

    return (<>
    <h1>City Quiz</h1>
    <p>What is the Capital of Uttrakhand?</p>
    <form onSubmit={handleSubmit}>
        <textarea
            value={answer}
            disabled={status==="submitting"}
            onChange={(e)=>setAnswer(e.target.value)}
            onKeyDown={(e)=>{
                if(e.target.value==="Enter"){
                handleSubmit();
            }}
            }
        /><br/  >
        <button
            disabled={answer.length === 0 || status ==="submitting"}
        >Submit</button>
        {error !== null && <p>{error.message}</p>}
    </form>
    </>);
}

function formSubmit(answer){
    return new Promise((resolve, reject)=>{
        const ans=answer ==="dehradun" || answer==="Dehradun" || answer==="DEHRADUN";
        setTimeout(()=>{
            if(ans){
                resolve();
            }else{
                reject(new Error('Good guess but a wrong answer, Try again!'));
            }
        },1500);
    });
}