import { useState } from 'react'
import {PostComponent} from "./post"
// import {users} from "./user"
// import './App.css'
import { Notifications_change } from './notify'
import { ToDo } from './todo'
import { Navbar } from './nav'
import { Stopwatch } from './clock'

function App(){
    const [showStopwatch, setShowStopwatch] = useState(true)

  const [posts , setPosts] = useState([{
name:"Sadanand Konapur",
 followers_Count:30 ,
 image_link:"https://avatars.githubusercontent.com/u/197269084?v=4Y" ,time:"45m ago",
 role:"DEVOPS ENGINEER" ,
 isCompany:false
  },
  {
    name:"Thirumalesh Pinninti",
     followers_Count:35,
      image_link:"https://thirumalesh.xyz/assets/Thirumalesh.webp", time:"55m ago",
       role:"AI DEVOPS ENGINEER",
        isCompany:false
  },
  {
    name:"Google",
     followers_Count:35,
     image_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZEZ6fa7bPwCI4HE5583rhd3qiFNmf6kiPg&s",
      isCompany:true
  }])
 
 


const PostComponents = posts.map(post=>   <PostComponent 
  name={post.name} 
  followers_Count={post.followers_Count} 
  image_link={post.image_link}
  time={post.time} 
  role={post.role}
  isCompany={post.isCompany}></PostComponent>
)
  function addPost(){
    setPosts([...posts , {
name:"Sadanand Konapur",
 followers_Count:30 ,
 image_link:"https://avatars.githubusercontent.com/u/197269084?v=4Y" ,time:"45m ago",
 role:"DEVOPS ENGINEER" ,
 isCompany:false
  } ])
  }
  return <div style={{backgroundColor:"#95a5a6",height:"100vh"}}>
    <button onClick={addPost}>Add a Post </button>
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
  
  <br />
<br />
  {PostComponents}
  {/* <Notifications_change></Notifications_change> */}
  {/* <Navbar></Navbar> */}
  <br />
  {/* <ToDo></ToDo> */}
        <button onClick={() => setShowStopwatch(!showStopwatch)}>
    Toggle Stopwatch
  </button>
  {showStopwatch && <Stopwatch />}
  {/* <Stopwatch></Stopwatch> */}
    </div>
  </div>
}


export default App
