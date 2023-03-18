import React from 'react'
import { Routes ,BrowserRouter,Route } from 'react-router-dom'
import Layout from './components/Layout'
import BusinessRegister from './pages/BusinessRegister'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'




export default function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='Login' element={<Login/>}></Route>
                    <Route path='Register' element={<Register/>}></Route>
                    <Route path='Detail' element={<Detail/>}></Route>
                    {
                      window.localStorage.getItem("jwt_token") !== null &&
                       <Route path='business_register' element={<BusinessRegister/>}></Route>
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
