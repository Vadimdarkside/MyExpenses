import React from 'react';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ expenses, onDeleteExpense }) {
  const tableStyle = {
    marginTop: '20px',
    borderCollapse: 'collapse',
    width: '80%',
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const thStyle = {
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
    borderRight: '1px solid #ddd'
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Expense Title</th>
          <th style={thStyle}>Amount</th>
          <th style={thStyle}>Actions</th>
        </tr>
      </thead>
      <tbody>
      {expenses[0] && <ExpenseItem key={expenses[0].id} expense={expenses[0]} onDelete={onDeleteExpense} />}
      </tbody>
    </table>
  );
}