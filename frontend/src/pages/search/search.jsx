import './search.css'
import Gap from '../../components/gap.jsx';
import { useEffect, useState } from 'react'
import { LuTextSearch } from "react-icons/lu";
import Card from "../../components/card.jsx"
import Popup from "../../components/popup.jsx"

function SearchPage(){
    const [query, setQuery] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
            document.title = "Search"
            fetch('http://localhost:5000/api/posts')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setPosts(data); 
          })
    }, []);

    const filteredResources = posts.filter(post => 
        post.title?.toLowerCase().includes(query.toLowerCase())
    );
    const [isOpen, setIsOpen] = useState(false);
    const [selectedResource, setSelectedResource] = useState(null);

    const openPopup = (resource) => {
        setSelectedResource(resource);
        setIsOpen(true);
    }

    const closePopup = () => {
        setSelectedResource(null);
        setIsOpen(false);
    }

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
        <div className={query === '' ? 'noresults':'search-results'}>
            {query === "" ? (
                    <LuTextSearch className="icon"/> 
                ) : filteredResources.length === 0 ? (
                    <div className='error'>Not Found</div>
                ) : (
                    filteredResources.map((resource) => (
                        <div className='search-output' key={resource._id}>
                        <Card  
                            {...resource} 
                            onClick={() => typeof openPopup === 'function' && openPopup(resource)} 
                        />
                        </div>
                    ))
                )}
        </div>
        <Popup isOpen={isOpen} onClose={closePopup} resource={selectedResource} />
    </div>
    )
}   

export default SearchPage