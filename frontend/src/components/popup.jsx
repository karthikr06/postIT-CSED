import React from 'react';

function Popup({ isOpen, onClose, resource }) {
  if (!isOpen || !resource) return null; 

  return (
    <div className="overlay" onClick={onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        
        <h2>{resource.title}</h2>
        <p>{resource.description}</p>
        
        {resource.link && (
            <h4>
                Link: <a href={resource.link} target="_blank" rel="noreferrer" style={{color: 'var(--accent)'}}>Open Resource</a>
            </h4>
        )}
        
        <div className="tags-container">
            <span className="tag-badge">{resource.category || "General"}</span>
        </div>
      </div>
    </div>
  );
}

export default Popup;