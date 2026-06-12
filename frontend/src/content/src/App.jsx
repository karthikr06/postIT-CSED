import { useState } from 'react'
import './App.css'
import HomePage from './pages/home/home.jsx'
import CreatePage from './pages/create/create.jsx'
import SearchPage from './pages/search/search.jsx'
import NavBar from './navBar.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
