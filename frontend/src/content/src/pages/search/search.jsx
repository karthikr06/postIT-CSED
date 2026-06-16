import './search.css'
import Gap from '../../gap';
import { useEffect, useState } from 'react'
import { LuTextSearch } from "react-icons/lu";
import Card from "../home/card"
import Popup from "../home/popup"

function searchPage(){
    const [query, setQuery] = useState("");
    /*
    const STUDY_RESOURCES = [
  {
    id: 1,
    title: "React Hooks Cheat Sheet",
    description: "A quick-reference PDF covering useState, useEffect, and custom hooks usage.",
    tags: ["React", "JavaScript", "Frontend", "PDF"]
  },
  {
    id: 2,
    title: "Cracking the Coding Interview Tips",
    description: "A high-quality YouTube video breaking down algorithmic problem-solving patterns.",
    tags: ["Interview Prep", "Algorithms", "YouTube", "Coding"]
  },
  {
    id: 3,
    title: "Intro to Machine Learning Notes",
    description: "Comprehensive lecture slides covering linear regression and basic neural network structures.",
    tags: ["AI", "Machine Learning", "Data Science", "Slides"]
  },
  {
    id: 4,
    title: "CSS Flexbox & Grid Guide",
    description: "An interactive code file containing visual blueprints for responsive layout design.",
    tags: ["CSS", "Web Design", "Frontend", "Code"]
  },
  {
    id: 5,
    title: "Data Structures Crash Course",
    description: "A 20-minute video playlist reviewing linked lists, binary trees, and graphs.",
    tags: ["Computer Science", "Data Structures", "YouTube"]
  },
  {
    id: 6,
    title: "SQL Query Optimization PDF",
    description: "Advanced guide on indexes, execution plans, and speeding up database queries.",
    tags: ["Databases", "SQL", "Backend", "PDF"]
  },
];*/

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
                        <div className='search-output'>
                        <Card 
                            key={resource.id} 
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

export default searchPage