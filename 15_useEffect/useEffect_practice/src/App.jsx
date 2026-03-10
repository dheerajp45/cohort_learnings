import { useEffect, useState } from 'react'

import './App.css'

function App(){
  
const [count , setCount] = useState(0);
const [count2 , setCount2] = useState(0);

  function inc_Count(){
        setCount(prev=> prev+1)
    }
  function dec_Count(){
        setCount2(prev=> prev-1)
    }

return <div>
    <Counter count={count} count2={count2}></Counter>
    <button onClick={inc_Count}>increse the count</button>
    <br /><br />
        <button onClick={dec_Count}>decrese the count</button>
</div>
}

function Counter(props){
    useEffect(()=>{
        console.log("mount"); 
        return function(){
      console.log("unmount");
    }
},[]);
useEffect(()=>{
    console.log("count has changed");

    return ()=>{
        console.log(("inside clean up of first count"));
        
    }
},[props.count])
// useEffect(()=>{
//     console.log("count2 has changed");
// },[props.count2])
    return <div>
        counter1 =  {props.count}
        <br /><hr />
        counter2 = {props.count2}
    </div>
}
export default App
