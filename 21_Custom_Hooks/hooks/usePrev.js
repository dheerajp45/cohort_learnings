import { useEffect, useRef } from "react"

export const usePrev = (oldValue)=>{
const ref = useRef();
useEffect(()=>{
    ref.current = oldValue;
},[oldValue])
return ref.current
}