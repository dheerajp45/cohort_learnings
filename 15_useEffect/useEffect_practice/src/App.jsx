import { useEffect, useState } from 'react'

import './App.css'

function App(){
  
const [count , setCount] = useState(0);

  function inc_Count(){
        setCount(prev=> prev+1)
    }

return <div>
    <Counter count={count}></Counter>
    <button onClick={inc_Count}>increse the count</button>
</div>
}

function Counter(props){
    useEffect(()=>{
        console.log("mount");
            return function(){
      console.log("unmount");
    }
},[]);
    return <div>
        counter {props.count}
    </div>
}
export default App
