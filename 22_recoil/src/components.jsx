import { createContext, useContext, useState } from "react";
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom, evenSelector } from "../store/atoms/counter";

function Value() {
  const count = useRecoilValue(counterAtom)
  return <div><b>{count}</b></div>
}
function Inc() {

  const setCount = useSetRecoilState(counterAtom)

  return <><button onClick={() => setCount(count => count + 223)}> <b>Inc</b></button></>
}

function Dec() {
    const setCount = useSetRecoilState(counterAtom)
    
  return <><button onClick={() => setCount(count => count - 1)}> <b>Dec</b></button></>
}

function IsEven(){
  const evenOrNot = useRecoilValue(evenSelector)
  return <div>
    {evenOrNot ? "Even":"Odd"}
  </div>
}

function Counter() {
  return <>

    <Inc></Inc>
    <Dec></Dec>
    <Value></Value>
    <br />
    <IsEven></IsEven>

  </>

}

export { Counter }




