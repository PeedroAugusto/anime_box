import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/home'
import Test from './Components/Teste/Test'
import Callback from './Callback'
const AppRouter = () => (
    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/' element={<Callback />} />
    </Routes>
)
export default AppRouter;