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
  {
    id: 7,
    title: "Git & GitHub Workflow Basics",
    description: "A printable markdown file detailing branch management, merging, and pull requests.",
    tags: ["Git", "DevOps", "Version Control", "Markdown"]
  },
];

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
            {STUDY_RESOURCES.map((resource) => (
                <Card key={resource._id} {...resource} onClick={() => openPopup(resource)} />
            ))}
        </div>
        <Popup isOpen={isOpen} onClose={closePopup} resource={selectedResource} />
    </div>
    )
}   

export default HomePage