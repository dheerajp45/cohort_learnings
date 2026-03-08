import { useEffect, useState } from "react"

function App(){
  const [toggle,setToggle]= useState(true)
useEffect(()=>{
  setInterval(()=>{
    setToggle(prev => !prev)
    console.log("turned on or off")
  },5000)
},[])
  return <div>
    hi hello
    <br />
    <b>dheeraj here</b>
    {/* <Counter></Counter>  */}
    {toggle &&  <Stopwatch></Stopwatch>}
      
    {/* <NameGame></NameGame> */}
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
  const[secs, setSecs] = useState(0);

  useEffect(()=>{
    console.log("mount done");
    
    let clock = setInterval(()=>{
      setSecs(prev => prev+1)
      console.log("hi from clock");
    },1000);

    return ()=>{
      clearInterval(clock)
      console.log("unmount done");
      
    }
  },[]) 


  return <div>
<br /> 
  <h1>{secs}</h1>
  </div> 
}


function NameGame(){
  const [name,setName] =  useState("dheeraj");
// console.log("in name game");

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
