import { useState , useEffect} from "react";
 function Navbar(){
const [currentTab , setCurrentTab]  = useState("feed")
useEffect(()=>{
    console.log("sent the req to backened to get data for the tab => "+currentTab);
    
},[currentTab])

return <div>
    <button onClick={()=>{
        setCurrentTab("feed")
    }} style={{color: currentTab=="feed"?"red":"black"}}>feed</button>
    <button onClick={()=>{
        setCurrentTab("Notifications")
    }}  style={{color: currentTab=="Notifications"?"red":"black"}}>Notifications</button>
    <button onClick={()=>{
        setCurrentTab("messages")
    }}  style={{color: currentTab=="messages"?"red":"black"}}>messages</button>
    <button onClick={()=>{
        setCurrentTab("jobs")
    }}  style={{color: currentTab=="jobs"?"red":"black"}}>jobs</button>
</div>



 }

 export {Navbar}