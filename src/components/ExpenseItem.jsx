import React from 'react';

export default function ExpenseItem({ expense, onDelete }) {
  return (
    <tr>
      <td>{expense.title}</td>
      <td>{expense.amount}$</td>
      <td>
        <button onClick={() => onDelete(expense.id)}>Delete</button>
      </td>
    </tr>
  );
}