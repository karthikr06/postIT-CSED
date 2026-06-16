import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar.jsx';
import Home from './pages/home/home.jsx';
import Search from './pages/search/search.jsx';
import Create from './pages/create/create.jsx';
import './App.css'
import { useState, useEffect } from 'react';

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
    <BrowserRouter>
      <NavBar className={navactive ? 'hidden' : ''}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;