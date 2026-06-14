import './search.css'
import Gap from '../../gap';
import { useEffect } from 'react'

function searchPage(){
    useEffect(() => {
            document.title = "Search"
        }, []);
    return(<>
            <Gap />
        {/* Search Page Content */}
        search page
    </>
    )
}   

export default searchPage