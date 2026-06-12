import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function navBar(){
    return(<nav id='navBar'>
        <ul>
            <li><div className="nav-link"><Link to="/">Home</Link></div></li>
            <li><div className="nav-link"><Link to="/create">Create</Link></div></li>
            <li><div className="nav-link"><Link to="/search">Search</Link></div></li>
        </ul>
    </nav>
    )
}

export default navBar