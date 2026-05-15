import {useRef} from 'react'


function Signup(){
  const inputRef = useRef();
   function focusOnInput() {
    // document.getElementById("name");
    inputRef.current.focus()
    
  }
  return (
    <div>
      <input ref={inputRef} type="text" id="name" />
      <input type="text" />
      <button onClick={focusOnInput}>submit</button>
    </div>
  );
}
export {Signup}