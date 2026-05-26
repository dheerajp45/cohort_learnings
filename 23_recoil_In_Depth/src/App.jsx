import { useState } from 'react'
import './App.css'
import {Navbar} from './Navbar'
import { useRecoilValue,RecoilRoot } from 'recoil'
function App() {


 return <div>
  <RecoilRoot>
  <Navbar></Navbar>
  </RecoilRoot>

 </div>
}
 

export default App
