import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/home/home.jsx'
import CreatePage from './pages/create/create.jsx'
import SearchPage from './pages/search/search.jsx'
import NavBar from './navBar.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [navactive, setNavActive] = useState(false);

    useEffect(() => {
      let lastScrollY = window.scrollY;
      const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          setNavActive(true);
        } else {
          setNavActive(false);
        }
        lastScrollY = window.scrollY;
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    });

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar className={navactive ? 'hidden' : ''} />
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
