import { useMemo } from 'react';

function useFilteredExpenses(expenses, selectedCategoryId) {
  return useMemo(() => {
    if (!selectedCategoryId) {
      return expenses;
    }

    return expenses.filter(expense => expense.category_id === selectedCategoryId);
  }, [expenses, selectedCategoryId]);
}

export default useFilteredExpenses;