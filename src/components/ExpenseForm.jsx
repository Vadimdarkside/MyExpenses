import React, { useState, useRef, useEffect } from 'react';

export default function ExpenseForm({ onAddExpense, selectedCategoryId }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [showForm, setShowForm] = useState(false);

  const titleInputRef = useRef();

  useEffect(() => {
    if (showForm) {
      titleInputRef.current.focus();
    }
  }, [showForm]);

  const submitHandler = (event) => {
    event.preventDefault();
    const currentDate = new Date().toLocaleDateString();
    onAddExpense({ category_id: selectedCategoryId, title, amount: Number(amount), date: currentDate });
    setTitle('');
    setAmount('');
    setShowForm(true);
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    marginTop: '20px'
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4caf50',
    color: 'white',
    cursor: 'pointer',
  };

  const hideButtonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'white',
    color: 'black',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  };

  const buttonWrapperStyle = {
    position: 'relative',
    height: '50px'
  };

  if (!showForm) {
    return (
      <div style={buttonWrapperStyle}>
        <button style={hideButtonStyle} onClick={() => setShowForm(true)}>Show Form</button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler} style={formStyle}>
      <input ref={titleInputRef} type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Expense Title" required style={inputStyle} />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required style={inputStyle} />
      <button type="submit" style={buttonStyle}>Add Expense</button>
      <button type="button" style={{ ...buttonStyle, backgroundColor: 'white', color: 'black' }} onClick={() => setShowForm(false)}>Hide Form</button>
    </form>
  );
}