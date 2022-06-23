import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Messages } from './components/MainLayout/Messages';
import { Profile } from './components/MainLayout/Profile';
import { Layout } from './components/MainLayout/Layout';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/message' element={<Messages />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
