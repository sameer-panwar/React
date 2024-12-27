import { useState } from "react";

export default function Feedback(){

    const [text, setText]=useState('');
    const [status, setStatus]=useState('typing');

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending');
        await messageSent(text);
        setStatus('sent');
    }

    const isSending=status ==='sending';
    const isSent= status === 'sent';

    if(isSent){
        return <h1>Thanks for the feedback.</h1>
    }

    return(<>
        <h1>How you find our Hotel? Sir.</h1>

        <form onSubmit={handleSubmit}>
            <textarea
                disabled={isSending}
                value={text}
                onChange={(e)=>setText(e.target.value)}
            /><br/>
            <button disabled={isSending}>Send</button>
            {isSending && <h3>Sending.....</h3>}
        </form>
    </>);
}

function messageSent(text){
    return new Promise((resolve)=>{
        setTimeout(resolve, 2000);
    })
}