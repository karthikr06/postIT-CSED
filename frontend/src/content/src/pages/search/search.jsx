import './search.css'
import Gap from '../../gap';
import { useEffect, useState } from 'react'
import { LuTextSearch } from "react-icons/lu";

function searchPage(){
    const displaysearch = () => {};

    const [query, setQuery] = useState("");

    useEffect(() => {
            document.title = "Search"
        }, []);
    return(<div className="searchPage">
        <Gap />
        {/* Search Page Content */}
        <div className="search-container">
        <input 
            className="search-input" 
            type="text" 
            placeholder="Search..." 
            value={query}
            onChange={(e) => {setQuery(e.target.value)}}
        />
        </div>
        <div className="search-results">
            {query === "" && <LuTextSearch className="icon"/>}
        </div>
    </div>
    )
}   

export default searchPage