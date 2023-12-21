import React, { useState, useEffect, useRef } from 'react';

export default function NewCategory({ onAddCategory, categories }) {
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');

  const name = useRef();
  const colorRef = useRef();
  const imageRef = useRef();
  
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

  const onSubmit = (event) => {
    event.preventDefault();
    const category = {
      id: idCalculator(),
      name: name.current.value,
      color: colorRef.current,
      img: imageRef.current,
    };
    console.log(category);

    onAddCategory(category);
  };

  function idCalculator() {
    const categoryid = ++categories[categories.length - 1].id;
    return categoryid;
  }

  const [selectedColor, setSelectedColor] = useState('#f44336');

  const colors = ['blue', 'red', 'green', 'lime', 'indigo', 'violet', 'fuchsia', 'pink'];

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
    color: 'black',
    marginTop: '50px',
    width: '40%',
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
    width: '40%',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', 

  };

  const imagesButtonStyle = {
    width: '50px',
    margin: '10px 10px 10px 10px',
    transition: 'transform 0.3s ease', // Added transition for scale animation
  };

  const colorSelectStyle = {
    width: '50%',
    height: '30px',
    textAlign: 'center',
    margin: '20px auto',
  };

  const scaleOnHover = {
    transform: 'scale(1.2)',
  };

  return (
    <div>
      <div style={containerStyle}>
        <form style={formStyle} onSubmit={onSubmit}>
          <h1 className="text-5xl mb-2">Create Expenses category</h1>
          <input type="text" ref={name} style={inputStyle} defaultValue={"noname"} placeholder="Enter name..." /><br />
          <div>
            <label>Choose font color</label>
            <div>
              <div>
                <div style={colorSelectStyle}>
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        colorRef.current = color;
                      }}
                      style={{
                        backgroundColor: color,
                        width: '30px',
                        height: '30px',
                        margin: '2px',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        boxShadow: selectedColor === color ? '0 0 0 3px inset white' : 'none',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      onMouseDown={(e) => (
                        document.querySelectorAll('.color-button').forEach((button) => {
                          button.style.boxShadow = 'none';
                        }),
                       e.currentTarget.style.transform = 'scale(0.9)',
                       e.currentTarget.style.boxShadow = '0 0 0 3px inset white')}
                      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      className='color-button'
                    ></button>
                  ))}
                </div> <br></br>
              </div>
            </div>
          </div>
          <label>Choose picture for your category:</label>
          <div>
            {imageList.map((image, index) => (
              <button
                type="button"
                style={imagesButtonStyle}
                onClick={() => {
                  imageRef.current = image.path;
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onMouseDown={(e) => (
                  document.querySelectorAll('.img-button').forEach((button) => {
                    button.style.boxShadow = 'none';
                  }),
                  e.currentTarget.style.transform = 'scale(0.9)',
                  e.currentTarget.style.boxShadow = '0 0 0 3px inset white, 0 0 10px rgba(255, 255, 255, 0.7)')}
                  
                onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)',
                e.currentTarget.style.boxShadow = '0 0 0 1px inset white, 0 0 10px rgba(255, 255, 255, 0.7)')}
                
                className='img-button'
              >
                <img src={image.path} />
              </button>
            ))}
          </div>
          <button onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.9)')}
                      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')} 
          type="submit" style={buttonStyle}>Create</button>
        </form>
      </div>
    </div>
  );
}
