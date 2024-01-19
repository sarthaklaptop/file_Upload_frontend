// FileUpload.js

import React, { useState } from 'react';

function FileUpload({ onFileChange }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChangeLocal = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileChange(file); // Notify the parent component about the file change
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">Upload File:</label>
      <div className="flex items-center">
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .gif"
          onChange={handleFileChangeLocal}
          className="mr-2"
        />
        {selectedFile && (
          <p className="text-sm mt-2">Selected file: {selectedFile.name}</p>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
