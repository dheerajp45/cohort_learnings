import { useEffect, useState } from "react"

function App(){
  return <div>
    hi hello
    <br />
    <b>dheeraj here</b>
    <Counter></Counter>
    <Stopwatch></Stopwatch>
    <NameGame></NameGame>
  </div>
}



function Counter(){

const [count,setCount] = useState(0);
useEffect(()=>{
  console.log("Counter Mounted");

  return ()=>{
    console.log("Unmount Counter");
    
  }
},[])


useEffect(()=>{
  console.log("User Updated Count");
},[count])
console.log("in counter fucntion");


function increaseCount(){
  setCount(count+1);
}
function decreaseCount(){
    setCount(count-1);

}
function resetCount(){
  setCount(0)
}

  return <div>
    <h1 id="text">
      {count}
    </h1>
    <button onClick={increaseCount}>Increase count</button>
    <br />
    <button onClick={decreaseCount}>decrease Count</button>
    <button onClick={resetCount}>Reset count</button>
    <br />
  </div>
}

function Stopwatch(){
  const [secs , setSecs] = useState(0);
console.log("in stopwatch fucntion");


// function stopwatchStarts(){
//  setInterval(function(){
//     setSecs(prev => prev+1);
//   },1000)
// }

// useEffect(function(){
//   setInterval(function(){
//     setSecs(prev=>prev+1)
//   },1000)
//   console.log("mounted");
  
// },[]);
 
  return <div>
    <h1 id="text">{secs}</h1>
    {/* <button onClick={stopwatchStarts}>Start the Stop watch</button> */}
  </div>
}


function NameGame(){
  const [name,setName] =  useState("dheeraj");
console.log("in name game");

  function gowthamName(){
    setName("Gowtham")
  }
  return <div>
<br /> 
  <h1>{name}</h1>
  <button onClick={gowthamName}>Change Name To Gowtham</button>
  </div> 
}
export default App
