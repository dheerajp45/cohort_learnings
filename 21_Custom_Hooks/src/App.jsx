import { useState } from 'react';
import './App.css'
import { Counter } from './Counter'
import {  useFetch } from '../hooks/useFetch'
import { usePrev } from '../hooks/usePrev';
import { useDeBounce } from '../hooks/useDeBounce';


function App() {
  // const [currentPost , setCurrentPost] = useState(1);
// const [presentValue ,setPresentValue ] = useState(0);
// const prev = usePrev(presentValue);

// const {data,loading} = useFetch("https://jsonplaceholder.typicode.com/todos/"+currentPost);
// if(loading){
//   console.log("load done");
//   return <div>
//     <b>loading please wait.................</b>
//   </div>
// }


// function changePresentValue(){
//   setPresentValue(c=>c+1)
// }
const [text,setText] = useState("");
function handleChange(event){
  let value = event.target.value
  setText(value);
  toBeDeBounced(value)
}

 function sendDataToBackend(text){
  console.log("searched in backend for "+text)
 }
 const toBeDeBounced = useDeBounce(sendDataToBackend)

 return <div>
  {/* <Counter first={6} />
  <Counter />
  <button onClick={()=>setCurrentPost(1)}><b>1</b></button>
  <button onClick={()=>setCurrentPost(2)}><b>2</b></button>
  <button onClick={()=>setCurrentPost(3)}><b>3</b></button>
  {data.title} <br />
  {JSON.stringify(data)} */}
  {/* <br /><hr /> <br />
  <b>{presentValue}</b>
  <button onClick={changePresentValue}><b>click me!!</b></button>
  <b>the prev value was {prev}</b> */}

<input type="text" onChange={handleChange}></input> 

 </div>


}

export default App
