// src/components/ImageGallery.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiles, incrementViewCountAsync } from '../redux/fileThunks';
import { setFiles } from '../redux/slices/fileSlice';

import ImageCard from './ImageCard';

console.log("==>>",fetchFiles, incrementViewCountAsync)

const ImageGallery = () => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files);
  // console.log("Files in component:", files);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Declare response variable
        const response = await dispatch(fetchFiles());
        console.log("response=>a",response.payload);
        dispatch(setFiles(response.payload));
        console.log('Files fetched successfully:', files);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchData();
  }, [dispatch, files]);

  const handleImageClick = async (fileId) => {
    await dispatch(incrementViewCountAsync(fileId));
  };

  if (files.length === 0) {
    return <div>Loading...</div>; // or any loading indicator
  }


  return (
    <div className="image-gallery flex flex-wrap justify-center items-center">
      {files.map((file) => (
        <ImageCard key={file._id} file={file} onClick={() => handleImageClick(file._id)} />
        
      ))}
    </div>
  );
};

export default ImageGallery;