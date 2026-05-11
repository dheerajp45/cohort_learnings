import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Dheerajp45 } from './Dheerajp45'
import {Johnbury} from './Johnbury'
import {Home} from './Home'

function App() {
  return ( <div>

    this is routing practice <br />
    <BrowserRouter>
        <Link to="/">Home</Link><br />
    <Link to="/dheerajp45">dheeraj</Link><br />
    <Link to="/johnbury">john</Link>
      <Routes>
        <Route path='/dheerajp45' element={<Dheerajp45 />} />
        <Route path='/johnbury' element={<Johnbury />} />
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );

}





export default App
