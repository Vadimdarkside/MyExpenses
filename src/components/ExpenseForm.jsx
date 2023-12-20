import React, { useState } from 'react';

export default function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    onAddExpense({ title, amount: Number(amount) });
    setTitle('');
    setAmount('');
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Expense Title" />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <button type="submit">Add Expense</button>
    </form>
  );
}