import { useState , useEffect} from "react";

function Stopwatch(){
    const [secs , setSecs] = useState(0);


    function inc_Secs(){
        setSecs(prev=> prev+1)
        console.log("clocn runing ");
        
    }
    useEffect(()=>{
       let clock = setInterval(inc_Secs,1000);
        return function(){
            clearInterval(clock )
            console.log("unmounted");
            
        }
    },[])

    return <div>
   
        seconds elapsed = {secs}
    </div>
}
 export {Stopwatch}