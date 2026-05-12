import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Dheerajp45 } from './Dheerajp45'
import {Johnbury} from './Johnbury'
import {Home} from './Home'
import {ErrorPage} from './ErrorPage'
import { Layout } from './Layout';
function App() {
  return ( <div>

    {/* this is routing practice <br /> */}
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='/dheerajp45' element={<Dheerajp45 />} />
        <Route path='/johnbury' element={<Johnbury />} />
        <Route path='/' element={<Home/>}/>
        
        </Route>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    
    </BrowserRouter>
    </div>
  );

}





export default App
