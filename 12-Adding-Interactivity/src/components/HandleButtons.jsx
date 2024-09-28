function AlertButton({message, children}){
    return (
    <button onClick={()=>alert(message)}>{children}</button>
    );
}


export default function Toolbar(){
    return(<>
        <AlertButton message="Playing......">
            Play song
        </AlertButton>
        <AlertButton message="Stopped Music">
            Stop Song
        </AlertButton>
        </>
    
    );
}