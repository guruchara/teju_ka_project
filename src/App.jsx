import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import HomePage from './components/home/HomePage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
