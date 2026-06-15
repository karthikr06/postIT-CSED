import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaHouse, FaMagnifyingGlass, FaPlus } from 'react-icons/fa6';

function navBar({className}) {
    return(<nav id='navBar' className={className}>
        <ul>
            <li><div className="nav-link"><Link to="/"><FaHouse />Home</Link></div></li>
            <li><div className="nav-link"><Link to="/create"><FaPlus />Create</Link></div></li>
            <li><div className="nav-link"><Link to="/search"><FaMagnifyingGlass />Search</Link></div></li>
        </ul>
    </nav>
    )
}

export default navBar