import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import MyPosts from './pages/MyPosts'
import Signin from './pages/Signin'

function App() {
  return (
    <BrowserRouter>
<Routes>
<Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/sign-in' element={<Signin></Signin>}></Route>
      <Route path='/sign-up' element={<SignUp></SignUp>}></Route>

      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
         <Route path='/my-posts' element={<MyPosts></MyPosts>}></Route>



</Routes>

    </BrowserRouter>
  )
}

export default App

