import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('http://localhost:5000/media');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setMedia(result.files); // Assuming the response contains an array of file paths
      } catch (err) {
        console.error('Error fetching media:', err);
      }
    };

    fetchMedia();
  }, []);

  return (
    <div className="gallery__container">
      {media.length > 0 ? (
        media.map((file, index) => (
          <div className="image__container" key={index}>
            {file.endsWith('.mp4') ? (
              <video width="320" height="240" controls>
                <source src={`http://localhost:5000/uploads/${file}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={`http://localhost:5000/uploads/${file}`} alt={`Uploaded media ${index}`} />
            )}
          </div>
        ))
      ) : (
        <p>No media found.</p>
      )}
    </div>
  );
};

export default Gallery;


