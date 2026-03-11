import { useState , useEffect} from "react";
 function ToDo(){
const [currentTab , setCurrentTab]  = useState(1)
const [tabData,setTabData] = useState({});
const [loading , setLoading]= useState(true)
useEffect(()=>{
    setLoading(true)
    // console.log("sent the req to backened to get data for the tab => "+currentTab);
    fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab)
    .then(async res=>{
        const json = await res.json();
        setTabData(json);
        setLoading(false)
    });
},[currentTab])

return <div>
    <button onClick={()=>{
        setCurrentTab(1)
    }} style={{color: currentTab==1 ?"red":"black"}}>todo1</button>
    <button onClick={()=>{
        setCurrentTab(2)
    }}  style={{color: currentTab==2 ?"red":"black"}}>todo2</button>
    <button onClick={()=>{
        setCurrentTab(3)
    }}  style={{color: currentTab==3?"red":"black"}}>todo3</button>
    <button onClick={()=>{
        setCurrentTab(4)
    }}  style={{color: currentTab==4?"red":"black"}}>todo4</button>
    <br />
   {loading?"𝙇𝙤𝙖𝙙𝙞𝙣𝙜..." : 
   <div style={{ padding: 20, border: "1px solid gray", borderRadius: 5 }}>
        <h3>{tabData.title}</h3>
        <p>Status: {tabData.completed ? "✅ Completed" : "⏳ Pending"}</p>
      </div>}
</div>



 }

 export {ToDo}