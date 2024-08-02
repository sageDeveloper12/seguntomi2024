import { useState } from "react";


const Upload = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = (e) => {
    e.preventDefault();

    if (files.length === 0) {
      setError('Please select files to upload.');
      return;
    }

    const formData = new FormData();
    Array.from(files).forEach(file => formData.append('files', file));

    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', 'https://event-api-4y3b.onrender.com/upload', true);
    
    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        setProgress(percentComplete);
      }
    });
    
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        setSuccess('Files uploaded successfully!');
        setError(null);
        setProgress(100);
      } else {
        setError('Failed to upload files. Please try again.');
        setSuccess(null);
      }
    });
    
    xhr.addEventListener('error', () => {
      setError('Failed to upload files. Please try again.');
      setSuccess(null);
    });
    
    xhr.upload.addEventListener('loadstart', () => {
      setUploading(true);
    });

    xhr.upload.addEventListener('loadend', () => {
      setTimeout(() => setUploading(false), 500); 
    });

    xhr.send(formData);
  };

  return (
    <div className="upload__container">
      <form onSubmit={handleUpload} className="form">
        <input
          type="file"
          multiple
          onChange={e => setFiles(e.target.files)}
        />
        <button className='upload__btn' type="submit">Upload</button>
      </form>
      {uploading && (
        <div id="loadingContainer">
          <div id="loadingBar" style={{ width: `${progress}%` }}></div>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Upload;
