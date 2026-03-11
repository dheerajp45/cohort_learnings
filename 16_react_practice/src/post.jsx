import { useState } from 'react'


import { Follow_Toggle } from "./follow"

const style = {
  width: 300,
  backgroundColor: "white",
  borderRadius: 10,
  border: "1px solid gray",
  display: "flex",
  flexDirection: "column",
  padding: 15,
  gap: 8,
  boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
  margin: 10
}

function PostComponent({name,followers_Count,image_link,time,role,isCompany}){
  return <div style={style}>

    {/* Top row: avatar + name/role */}
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img
        src={image_link}
        style={{ width: 45, height: 45, borderRadius: "50%" }}
      />
      <div>
        <div style={{display:"flex" ,gap:10, alignItems: "center"}}>
        <b style={{ fontSize: 14 }}>{name}</b>
        <Follow_Toggle></Follow_Toggle></div>
        <div style={{ fontSize: 11, color: "gray" }}>{role}</div>
        <div style={{ fontSize: 11, color: "gray" }}>{followers_Count} followers</div>
        

    {
      time !== undefined&&
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <div style={{ fontSize: 11, color: "gray" }}>{time}</div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/109/109613.png"
        style={{ height: 12, width: 12 }}
      />

    </div>
    }

      </div>
    </div>

    {/* Post content */}

  
    { isCompany!==true &&
    <div style={{ fontSize: 13, color: "#333" }}>
      Hi, I am <b>{name}!</b>
      I work as <b>{role} </b>
    </div>}

    {isCompany === true && 
    <div style={{ fontSize: 13, color: "#333" }}>
      This is a post from <b>{name}</b> company page!
    </div>
    }
  </div>
}

export {PostComponent}