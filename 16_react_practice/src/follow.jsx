import { useState } from 'react'


function Follow_Toggle(){
const [isFollowing , setFollowing] = useState(false);

function changeFollowStatus(){
  setFollowing(!isFollowing)
}
return <div>
<button onClick={changeFollowStatus}>{isFollowing ? "Following✅" : "Follow"}</button>
 
</div>

}

export {Follow_Toggle}