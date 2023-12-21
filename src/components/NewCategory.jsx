import React, { useState, useEffect } from 'react';

export default function NewCategory() {
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const importImages = async () => {
      const context = import.meta.glob('../assets/categories/categIcons/*.png'); //Хз чи запаше на вінді
      const images = await Promise.all(
        Object.keys(context).map(async (key) => {
          const module = await context[key]();
          return { path: key, module };
        })
      );
      setImageList(images);
    };

    importImages();
  }, []);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  const submitHandler = (event) => {

  };





  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
  };

  const inputStyle = {
    marginTop: '10px',
    width: '80%',
    padding: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
  };
  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '70%',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',

  }





  
  return (
    <div>
      <div style={containerStyle}>
        <form style={formStyle}>
          <h1 className="text-5xl mb-2">Create Expenses category</h1>
          <input type="text" style={inputStyle} placeholder="Enter name..." /><br />
          <label>Choose picture for your category:</label>
          <div>
          <select style={inputStyle} value={selectedImage} onChange={handleImageChange}>
            {imageList.map((image, index) => (
              <option key={index} value={image.path}>
                {image.path.split('/').pop()}
              </option>
            ))}
          </select>
          </div>
          <button type='submit' style={buttonStyle}>Create</button>
        </form>
      </div>
    </div>
  );
}
