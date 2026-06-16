import './create.css'
import Gap from '../../components/gap.jsx'
import { useEffect, useState } from 'react'

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Coding');
  const [link, setLink] = useState('');

  useEffect(() => {
    document.title = "Create"
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newPost = { title, description, category, link };

    try {
      const response = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      });

      if (response.ok) {
        alert("Resource uploaded successfully!");
        setTitle('');
        setDescription('');
        setCategory('Coding');
        setLink('');
      }
    } catch (error) {
      console.error("Error uploading resource:", error);
    }
  };

  return (
    <div className="create-post">
      <Gap />
      <h1>Create Resource Post</h1>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input 
          type="text" 
          placeholder="Enter resource title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required 
        />

        <label>Description</label>
        <textarea 
          placeholder="Describe the resource" 
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Coding</option>
          <option>DSA</option>
          <option>AI</option>
          <option>Notes</option>
          <option>Java</option>
          <option>Python</option>
          <option>C/C++</option>
          <option>Web Development</option>
        </select>

        <label>Resource Link</label>
        <input 
          type="url" 
          placeholder="Paste YouTube/Drive link here" 
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <button type="submit">Upload Resource</button>
      </form>
    </div>
  );
}