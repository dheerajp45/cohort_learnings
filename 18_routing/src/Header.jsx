import { Link } from "react-router-dom";


function Header(){
    return <div style={{ backgroundColor:'BlanchedAlmond', display: 'flex', gap: '200px', justifyContent: 'center', padding: '10px' }}>
        
            <Link to="/">Home</Link>
    <Link to="/dheerajp45">dheeraj</Link>
    <Link to="/johnbury">john</Link>
        

    </div>
}
export {Header}