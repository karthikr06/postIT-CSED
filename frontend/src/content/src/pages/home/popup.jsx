import React from 'react';

function Popup({ isOpen, onClose, resource }) {
  // If isOpen is false, don't render anything
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      {/* e.stopPropagation stops clicks inside the modal from triggering onClose */}
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        
        <h2>{resource.title}</h2>
        <p>{resource.description}</p>
        
        <div className="tags-container">
          {resource.tags.map((tag, index) => (
            <span key={index} className="tag-badge">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popup;
