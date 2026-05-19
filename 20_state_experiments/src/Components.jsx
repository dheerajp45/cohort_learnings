import { useState } from "react"

function LightBulb(){
     const [bulbOn, setBulbOn] = useState(true)
    return <div>   
        this <b>LightBulb</b> component
        <br /> <hr></hr> <br />
        <BulbState bulbOn = {bulbOn}></BulbState>
        <br /> <hr></hr> <br />
        <ToggleBulbState setBulbOn ={setBulbOn}></ToggleBulbState>
    </div>
}

function BulbState({bulbOn}){
    return <div>
      {
        // bulbOn && <p>the bulb is on</p>
        bulbOn ? <p>the bulb is on</p> : <p>the buld is off</p>
      }
        this is <b>BulbState</b> component
    </div>
}

function ToggleBulbState({setBulbOn}){
    function changeBulbStatus(){
        setBulbOn(c=>!c)
    }
    return <div>
        this is <b>ToggleBulbState</b> component
        <br />
        <button onClick={changeBulbStatus}>toggle the bulb</button>
    </div>
}

export {
    LightBulb
}