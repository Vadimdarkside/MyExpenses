import React from 'react';

const styles = {
  controller: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    margin: '0 5px',
    padding: '5px 15px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  p: {
    fontSize: '18px',
    margin: '0 5px',
  },
};

function FontSizeController({ increaseFontSize, decreaseFontSize }) {
  return (
    <div style={styles.controller}>
        <p style={styles.p}>Text Size :</p>
      <button style={styles.button} onClick={increaseFontSize}>+</button>
      <button style={styles.button} onClick={decreaseFontSize}>-</button>
    </div>
  );
}

export default FontSizeController;