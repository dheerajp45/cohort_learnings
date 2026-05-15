import { useState } from "react"

function Clock(){
    const [currentCount,setcurrentCount] = useState(0);
    
    function startClock(){
        setInterval(()=>{
            setcurrentCount(c=> c+1)
        },1000)
    }
    return <div><center>
        <b>
        {currentCount}
         </b> <br />
         <button onClick={startClock}><b>Start</b></button>
        <button><b>Stop</b></button>

    </center></div>
}

export {Clock}