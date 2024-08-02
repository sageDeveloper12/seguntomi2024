import { useState } from "react";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (files.length === 0) {
      setError('Please select files to upload.');
      return;
    }

    const formData = new FormData();
    Array.from(files).forEach(file => formData.append('files', file));

    try {
      const response = await fetch('https://event-api-4y3b.onrender.com/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setSuccess('Files uploaded successfully!');
      setError(null);
    } catch (err) {
      setError('Failed to upload files. Please try again.');
      setSuccess(null);
      console.error('Error uploading files:', err);
    }
  };

  return (
    <div className="upload__container">
      <form onSubmit={handleUpload} className="form">
        <input
          type="file"
          multiple
          onChange={e => setFiles(e.target.files)}
        />
        <button className= 'upload__btn'  type="submit">Upload</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Upload;


