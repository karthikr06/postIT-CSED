import './search.css'
import Gap from '../../gap';
import { useEffect } from 'react'

function searchPage(){
    useEffect(() => {
            document.title = "Search"
        }, []);
    return(<div className="searchPage">
        <Gap />
        {/* Search Page Content */}
        <div className="search-container">
        <input className="search-input" type="text" placeholder="Search..." />
        </div>
    </div>
    )
}   

export default searchPage