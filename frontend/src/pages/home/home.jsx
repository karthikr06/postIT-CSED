import './home.css'
import Gap from '../../components/gap.jsx'
import { useEffect, useState } from 'react'
import Card from '../../components/card.jsx'
import Popup from '../../components/popup.jsx'

const quotes = ["Knowledge is power. - Francis Bacon", "The only true wisdom is in knowing you know nothing. - Socrates", "Real knowledge is to know the extent of one's ignorance. - Confucius", "The investment in knowledge pays the best interest. - Benjamin Franklin", "An investment in knowledge always pays the best interest. - Benjamin Franklin"];

function HomePage(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.title = "Home"
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

    return(<div className="home-page">
        <Gap />
        {/* Home Page Content */}
        <div className="quote-container">
            {quotes[Math.floor(Math.random() * quotes.length)]}
        </div>
        <div className="home-desc">
            This is a global platform for sharing PDFs, files, and YouTube study links with students worldwide. Each shared resource features a clear title and description to guide learners instantly. It breaks down geographical barriers to make quality study materials accessible to anyone, anywhere.
        </div>
        <div className="card-container">
            {posts.map((resource) => (
                <Card key={resource._id} {...resource} onClick={() => openPopup(resource)} />
            ))}
        </div>
        <Popup isOpen={isOpen} onClose={closePopup} resource={selectedResource} />
    </div>
    )
}   

export default HomePage