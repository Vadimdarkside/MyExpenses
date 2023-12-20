import React from 'react';
import { List } from 'react-virtualized';

const TotalExpenses = () => {
    const expenses = [
        { title: 'Game', amount: 10 },
        { title: 'Products', amount: 100 },
        { title: 'Computer parts', amount: 200 },
    ];

    const rowRender = ({ index, key, style }) => {
        const expense = expenses[index];
        return (
            <div key={key} style={{ ...style, marginLeft: '10px' }}>
                {expense.title}: ${expense.amount}
            </div>
        );
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center w-[100%] h-[10%]">
            <h1 className="text-3xl font-serif font-bold">Total Expenses</h1>
    </div>
            <List
                width={300}
                height={200}
                rowCount={expenses.length}
                rowHeight={30}
                rowRenderer={rowRender}
            />
        </div>
    );
};

export default TotalExpenses;
