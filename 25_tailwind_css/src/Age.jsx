// import {webinar} from './assets/webinar.png'

function Age(){

    return <>
    {/* main div starts here i mean main body div */}
    <div className="bg-red-500 flex flex-col items-center">
        {/* heading div */}
        <div className="flex flex-row"> 
            {/* <div><img src="../assets/webinar.png" /></div> */}
            <div>webinar</div> 
            <div>.gg</div>
        </div>
        {/* main content heading div */}
        <div className="text-white text-xl">verify your age</div>
        
        {/*  sub text div small text*/}
        <div className="text-xs text-opacity-70">Please confirm your birth year. This data will not be stored</div>
        
        {/* birth year enter input box */}
        <div>
            {/* background needed to be blur  */}

            <input type="number" placeholder="your birth year" className="bg-red-200 rounded-sm "/>
        </div>

        {/* continue button on hover it needs to be more bright form bg colour */}
        <div>
            <button type="submit" placeholder="continue" className="bg-gray-200 rounded-sm hover:bg-blue-700">continue</button>
        </div>
    </div>
    
    </>
}

export {Age}