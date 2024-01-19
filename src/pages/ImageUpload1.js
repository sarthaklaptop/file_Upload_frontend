// ImageUpload.js

import React, { useState } from 'react';
// import FileUpload from './FileUpload';
import FileUpload from '../components/FileUpload';

function ImageUpload1() {
  const [formData, setFormData] = useState({
    Name: '',
    Description: '',
    file: null,
  });

  const handleFileChange = (file) => {
    setFormData((prevFormData) => ({ ...prevFormData, file }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('Name', formData.Name);
    formDataToSend.append('Description', formData.Description);
    formDataToSend.append('file', formData.file);

    try {
      const response = await fetch('http://localhost:4000/api/v1/imageUPload', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      console.log('Image uploaded successfully!');

      setFormData((prevFormData) => ({
      ...prevFormData,
      Name: '',
      Description: '',
      file: null,
    }));

    } catch (error) {
      console.error('Error during image upload:', error.message);
    }
    
  };

  return (
    <div className="flex flex-col justify-center items-center text-white mx-auto h-screen max-w-[1160px] w-full gap-4">
      <div className="flex gap-4 flex-col">
        <h2 className="text-3xl">Please verify your identity</h2>
        <p className="text-lg text-richblack-100">
          Select relevant documents to complete your KYC
        </p>
      </div>

      <div className="mt-4">
        <form
          onSubmit={handleFormSubmit}
          className="flex items-center justify-center flex-col p-4 border-2 border-sky-500 hover:border-solid hover:shadow-lg hover:shadow-sky-500"
        >
          <label className="text-sm font-bold">Name :</label>
          <br />
          <input
            className="text-sm w-[200px] rounded-sm text-black placeholder:text-slate-400 p-2"
            type="text"
            placeholder="Name"
            name="Name"
            onChange={handleInputChange}
            value={formData.Name}
          />
          <br />
          <label className="text-sm font-bold">Description :</label>
          <br />
          <textarea
            className="text-sm w-[200px] text-black rounded-sm placeholder:text-slate-400 p-2"
            type="text"
            placeholder="Describe the situation"
            name="Description"
            onChange={handleInputChange}
            value={formData.Description}
          />
          <br />
          {/* File Upload Component */}
          <FileUpload onFileChange={handleFileChange} />
          <br />
          <button className="text-lg bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ImageUpload1;
