

function Button({onClick, children}){
    return <button onClick={(e)=>{
        e.stopPropagation();
        onClick();
    }}>
                {children}
            </button>
}

export default function Tools(){
    return(
        <>
        <div className="Toolbar" onClick={()=>alert("You clicked on Div")}>
            <Button onClick={()=>alert("Playing Music")}>
                Play Music
            </Button>
            <Button onClick={()=>alert("Stoping Music")}>
                Stop Music
            </Button>
        </div>
        </>
    )
}