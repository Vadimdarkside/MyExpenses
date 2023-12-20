import React from 'react';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Expense Title</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {expenses[0] && <ExpenseItem key={expenses[0].id} expense={expenses[0]} onDelete={onDeleteExpense} />}
      </tbody>
    </table>
  );
}