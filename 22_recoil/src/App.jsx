import { useState } from 'react'

import './App.css'
import { Counter } from './components'
import {RecoilRoot} from "recoil";

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <>
    <RecoilRoot>
    <Counter></Counter>
    </RecoilRoot>
    </>
  )
} 

export default App
