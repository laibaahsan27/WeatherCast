import React from 'react'
import Navbar from './components/Navbar';
import Middle from './components/Home';
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Weather from "./Weather"

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Routes>
      <Route path="/" element={<Middle />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
    </div>
  )
}
