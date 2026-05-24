import { useState } from 'react'


function Counter({first=0}){
  const {count,inc} = useCounter(first); 
  return <div>  <button onClick={inc}><b>Increase ++</b> == <b>{count}</b></button> <br /> <hr />
</div>
}

function useCounter(first=0) {
    const [count , setCount] = useState(first);

  function inc() {
    setCount(c=>c+1)
  }
  return {
    count,
    inc
  }
}

export {Counter}