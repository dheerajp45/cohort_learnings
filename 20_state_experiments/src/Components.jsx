import React, { createContext, useContext, useState } from "react"

const BulbContext = createContext();

function BulbContextProvider({ children }) {

    const [bulbOn, setBulbOn] = useState(true)
    return <BulbContext.Provider value={{
            bulbOn: bulbOn,
            setBulbOn: setBulbOn
        }}>
            {children}

        </BulbContext.Provider>
    
}
function Light() {
    return <div>
        <BulbContextProvider>
        this <b>Light</b> component
        <br /> <hr></hr> <br />
        
            <LightBulb></LightBulb>
            <br /> <hr></hr> <br />
            <LightSwitch></LightSwitch>
        </BulbContextProvider>
    </div>
}

function LightBulb() {
    const { bulbOn } = useContext(BulbContext)
    return <div>
        {
            bulbOn ? <p>the bulb is on</p> : <p>the bulb is off</p>
        }
        this is <b>LightBulb</b> component
    </div>
}

function LightSwitch() {
    const { setBulbOn } = useContext(BulbContext)
    function changeBulbStatus() {
        setBulbOn(c => !c)
    }
    return <div>
        this is <b>LightSwitch</b> component
        <br />
        <button onClick={changeBulbStatus}>toggle the bulb</button>
    </div>
}

export {
    Light,
    BulbContext
}