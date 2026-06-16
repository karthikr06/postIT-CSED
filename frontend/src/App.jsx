import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar.jsx';
import Home from './pages/home/home.jsx';
import Search from './pages/search/search.jsx';
import Create from './pages/create/create.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;