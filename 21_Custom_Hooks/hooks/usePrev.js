import { useEffect, useRef } from "react"

export const usePrev = (oldValue)=>{
const ref = useRef();
useEffect(()=>{
    ref.current = oldValue;
},[oldValue])
return ref.current
}




// How it works:

// First render: return ref.current → returns undefined (nothing stored yet)
// useEffect runs: stores current value in ref.current
// Next render: return ref.current → returns previous value
// useEffect runs again: updates ref.current to new value
// Pattern repeats → always returns previous value
// Why this works:

// Return statement executes before useEffect
// So you always get the value from last render
// Perfect for tracking "what was the value before this changed"