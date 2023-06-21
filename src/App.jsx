import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './common/Header/Header'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Login />
      <Register />
    </>
  )
}

export default App
