import React, { useRef, useEffect } from 'react';
import './ExpenseItem.css';

export default function ExpenseItem({ expense, onDelete }) {
  const itemRef = useRef();
  const buttonStyle = {
    padding: '5px 10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'red',
    color: 'white',
    cursor: 'pointer'
  };

  useEffect(() => {
    itemRef.current.classList.add('animate');

    const timer = setTimeout(() => {
      itemRef.current.classList.remove('animate');
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <tr ref={itemRef}>
      <td>{expense.title}</td>
      <td>{expense.amount}$</td>
      <td>
        <button style={buttonStyle} onClick={() => onDelete(expense.id)}>Delete</button>
      </td>
    </tr>
  );
}