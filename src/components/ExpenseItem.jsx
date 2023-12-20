import React from 'react';

export default function ExpenseItem({ expense, onDelete }) {
  const buttonStyle = {
    padding: '5px 10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'red',
    color: 'white',
    cursor: 'pointer'
  };

  return (
    <tr>
      <td>{expense.title}</td>
      <td>{expense.amount}$</td>
      <td>
        <button style={buttonStyle} onClick={() => onDelete(expense.id)}>Delete</button>
      </td>
    </tr>
  );
}