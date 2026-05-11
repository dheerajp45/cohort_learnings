import { useState } from 'react'
import { Hello } from './hi'  
import {Card} from './card'
// import './App.css'

function App() {
  return(<div>
    <Hello name="dheeraj" lastname="panyam"></Hello>
    <div style={{display:'flex'}}>
      what u want to post <br /><br />
      <input type="text" />
    </div>
    <div>
      <Card>
        <div style={{color:'green'}}>
          post anything 
          <br /><br />sending children<br /><br />
          <input type="text" />
        </div>
      </Card>
    </div>
    <div>
      <Card1></Card1>
      <Card2></Card2>
    </div>
  </div>
      
  )
}


function Card1(){
  return <div style={{background:"red",borderRadius:20,color:"green"}}>
hello
  </div>
}

function Card2(){
  return <div style={{background:"red",borderRadius:20,color:"green"}}>
hi hello
  </div>
}


export default App
