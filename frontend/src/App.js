import React from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Lights from './components/Lights'
import Hanging from './components/Hanging'
import Decor from './components/Decor'
import Statues from './components/Statues'
import AddProduct from './components/AddProduct'
import Singup from './components/Singup'

const App = () => {
  return (
    <div>
<BrowserRouter>
<Navbar/>
<Routes>
<Route element={<Home/>} path='/'/>
<Route element={<Login/>} path='Login'/>
<Route element={<Singup/>} path='Singup'/>
<Route element={<Lights/>} path='Lights'/>
<Route element={<Hanging/>} path='Hanging'/>
<Route element={<Statues/>} path='Statues'/>
<Route element={<Decor/>} path='Decor'/>
<Route element={<AddProduct/>} path='Addproduct'/>

</Routes>

</BrowserRouter>
    </div>
  )
}

export default App
