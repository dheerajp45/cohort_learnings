import { useRef, useState } from "react"

function Clock(){
    const [currentCount,setcurrentCount] = useState(0);
    // const [timer , setTimer]=useState(0)
    const timer = useRef();
    // let timer = 0;
    function startClock(){
         let value= setInterval(()=>{
            setcurrentCount(c=> c+1)
        },1000)
        // setTimer(value);
        timer.current = value;
    }
    function stopClock(){
        // clearInterval(timer);
        clearInterval(timer.current)
    }
    return <div><center>
        <b>
        {currentCount}
         </b> <br />
         <button onClick={startClock}><b>Start</b></button>
        <button onClick={stopClock}><b>Stop</b></button>

    </center></div>
}

export {Clock}