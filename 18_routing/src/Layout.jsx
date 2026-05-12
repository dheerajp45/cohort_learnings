import { Outlet } from "react-router-dom";
import {Header} from './Header'
import { Footer } from "./Footer";
function Layout(){
    return <div style={{height:"100vh"}}>
        <Header></Header>
        before outlet
        <Outlet />
        after outlet
        <Footer />
    </div>
}

export {Layout}