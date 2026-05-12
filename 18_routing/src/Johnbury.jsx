import { useNavigate } from "react-router-dom"

function Johnbury(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/")
  }

  return <div style={{ backgroundColor:'grey'}}>
    hi from John bury

    <button onClick={redirectUser}>back to home</button>
  </div>
}
export {Johnbury}