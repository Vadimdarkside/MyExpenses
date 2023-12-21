import React, { useState, useEffect } from 'react';

export default function NewCategory() {
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const importImages = async () => {
      const context = import.meta.glob("/src/assets/categories/categIcons/*.png");
      const images = await Promise.all(
        Object.keys(context).map(async (key) => {
          const module = await context[key]();
          return { path: key, module: module.default }; // Access URL correctly
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    color: 'white',
  };

  const inputStyle = {
    marginTop: '50px',
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


const imagesButtonStyle = {
  width: '50px',
  margin: '10px 10px 10px 10px',
}
const imagesConteinerStyle = {
  
}


  
  return (
    <div>
      <div style={containerStyle}>
        <form style={formStyle}>
          <h1 className="text-5xl mb-2">Create Expenses category</h1>
          <input type="text" style={inputStyle} placeholder="Enter name..." /><br />
          <label>Choose picture for your category:</label>
          <div>
            
              {imageList.map((image, index) => (
                <button style={imagesButtonStyle}>
                
                  <img  src={image.path}  />
                
                </button>
              ))}
          </div>
          <button type='submit' style={buttonStyle}>Create</button>
        </form>
      </div>
    </div>
  );
}
