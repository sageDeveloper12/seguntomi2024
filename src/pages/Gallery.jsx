import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [media, setMedia] = useState([]);
  const [deletePassword, setDeletePassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('https://event-api-4y3b.onrender.com');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setMedia(result.files);
      } catch (err) {
        console.error('Error fetching media:', err);
      }
    };

    fetchMedia();
  }, []);

  const handleDelete = async (filename) => {
    try {
      const response = await fetch(`https://event-api-4y3b.onrender.com/${filename}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: deletePassword }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setSuccess(result.message);
      setError('');
      setMedia(media.filter(file => file !== filename));
    } catch (err) {
      setError('Failed to delete file. Please check your password.');
      setSuccess('');
      console.error('Error deleting file:', err);
    }
  };

  return (
    <div className="gallery__container">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <input
        type="password"
        placeholder="Enter delete password"
        value={deletePassword}
        onChange={(e) => setDeletePassword(e.target.value)}
      />
      <div className='image__wrapper'>
      {media.length > 0 ? (
        media.map((file, index) => (
          <div className="image__container" key={index}>
            {file.endsWith('.mp4') ? (
              <video width="320" height="240" controls>
                <source src={`https://event-api-4y3b.onrender.com/${file}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={`https://event-api-4y3b.onrender.com/${file}`} alt={`Uploaded media ${index}`} />
            )}
            <button onClick={() => handleDelete(file)}>Delete</button>
    
        </div>
  
        ))
      ) : (
        <p>No media found.</p>
      )}
    </div>
    </div>
  );
};

export default Gallery;
