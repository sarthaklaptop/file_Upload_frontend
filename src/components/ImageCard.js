// src/components/ImageCard.js
import React from 'react';

const ImageCard = ({ file, onClick }) => {
  console.log(file);
  return (
    <div className="max-w-[300px] p-2">
      <div className="image-card bg-white border border-gray-200 rounded-md overflow-hidden shadow-md">
        <img className="w-full h-40 object-cover" src={file.file} alt={file.Name} />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{file.Name}</h3>
          <p className="text-sm text-gray-600">{file.Description}</p>
          <p className="text-sm text-gray-600">Views: {file.views}</p>
          <button className="bg-blue-500 text-white p-2 rounded" onClick={onClick}>
            Increment View Count
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
