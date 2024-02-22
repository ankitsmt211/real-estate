import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import TopBar from "../Topbar/TopBar"
import Login from "../Auth/Login"
import Register from "../Auth/Register"
import { useContext } from 'react';
import { authContext } from '../../App';
import '../Base/base.css'

export default function Base(){
    const { isLoggedIn } = useContext(authContext);

    return <>
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={isLoggedIn ? <DashBoard /> : <Navigate to={'/login'} />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    </>
}

function DashBoard(){
    return <>
     <div className="main">
    <Sidebar/>
      <div className='eleArea'>
        <TopBar/>
      </div>
    </div>
    </>
}