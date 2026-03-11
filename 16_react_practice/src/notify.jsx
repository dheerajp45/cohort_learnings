import { useState , useEffect} from "react";

function Notifications_change(){
  const [notifications, setNotifications] = useState(0)

  function new_notification(){
    setNotifications(prev => prev+ 1)
  }
 
  useEffect(()=>{
    setInterval(()=>setNotifications(prev => prev + 1),3000)
    console.log("started nofifying");
  },[])

   useEffect(()=>{
    console.log("number of notificaitos are : " + notifications);  
    },[notifications])

  return <div style={{ display: "flex", alignItems: "center", gap: 15, padding: 10 }}>
    
    {/* Bell with badge */}
    <div style={{ position: "relative", display: "inline-block", cursor: "pointer" }} onClick={new_notification}>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png" 
        width={35} 
      />
      {notifications > 0 && 
        <div style={{
          position: "absolute",
          top: -5,
          right: -5,
          background: "red",
          borderRadius: "50%",
          width: 18,
          height: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 11,
          fontWeight: "bold"
        }}>
          {notifications}
        </div>
      }
    </div>

    {/* Button */}
    <button onClick={new_notification} style={{
      padding: "5px 15px",
      backgroundColor: "#0a66c2",
      color: "white",
      border: "none",
      borderRadius: 5,
      cursor: "pointer",
      fontWeight: "bold"
    }}>
      + Notify
    </button>

  </div>
}

export { Notifications_change }