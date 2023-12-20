import { useState, Suspense, lazy, useEffect } from "react";
import SideBar from "./components/SideBar";
import CATEGORIES_DATA from "./data/CATEGORIES_DATA";
import MainBlock from "./components/MainBlock";
import NoCategorySelected from "./components/NoCategorySelected";
import NewCategory from "./components/NewCategory";
import LoadingAnimation from "./components/LoadingAnimation";
import useLocalStorage from "./hooks/useLocalStorage";
import Winter from "./components/Theme/Winter";
import TopBar from "./components/TopBar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function lazyWithDelay(importStatement, delay) {
  return lazy(() =>
    new Promise(resolve => {
      setTimeout(resolve, delay);
    }).then(importStatement)
  );
}

const SelectedCategory = lazyWithDelay(() => import("./components/SelectedCategory"), 1000);
const TotalExpenses = lazyWithDelay(() => import('./components/TotalExpenses'), 500);

function App() {
  const [projectState, setProjectState] = useState({
    selectedCategoryId: undefined,
    theme: null,
  });
  const [showTotalExpenses, setShowTotalExpenses] = useState(false);
  const [categories, setCategories, isDataLoading] = useLocalStorage(
    "categories",
    CATEGORIES_DATA,
  );

  const [expenses, setExpenses] = useState([]);
  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { id: Math.random().toString(), ...expense },
    ]);
  }

  const deleteExpenseHandler = (id) => {
    setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
  };

  const onCategoryDeleteHandler = (id) => {
    const filteredCategories = categories.filter(
      (category) => category.id !== id,
    );
    setCategories(filteredCategories);
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedCategoryId: undefined,
      };
    });
  };
  const onCreateCategoryHandler = () => {
    setShowTotalExpenses(false);
    setProjectState((prev) => {
      return {
        ...prev,
        selectedCategoryId: null,
      };
    });
  };
  
  const onSelectCategoryHandler = (id) => {
    setShowTotalExpenses(false);
    setProjectState((prev) => {
      return {
        ...prev,
        selectedCategoryId: id,
      };
    });
  };

  const onTotalExpensesHandler = () => {
    setShowTotalExpenses(true);
  };
    

  let context;
  if (showTotalExpenses) {
    context = (
    <Suspense fallback={LoadingAnimation}>
      <TotalExpenses />
    </Suspense>
  );
  } else if (projectState.selectedCategoryId === undefined) {
    context = <NoCategorySelected onCreateCategory={onCreateCategoryHandler} />;
  } else if (projectState.selectedCategoryId === null) {
    context = <NewCategory />;
  } else {
    let category = categories.find(
      (item) => item.id === projectState.selectedCategoryId,
    );
    context = (
      <Suspense fallback={LoadingAnimation}>
        <SelectedCategory category={category} />
        <ExpenseForm onAddExpense={addExpenseHandler} />
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpenseHandler} />
      </Suspense>
    );
  }

  const ThemeSwitch = () => {
    if (projectState.theme == "winter") {
      setProjectState((prev) => {
        return {
          ...prev,
          theme: null,
        };
      });
    } else {
      setProjectState((prev) => {
        return {
          ...prev,
          theme: "winter",
        };
      });
    }
  };

  return (
    <>
      <TopBar onThemeChange={ThemeSwitch} />
      <main className="h-[100%] flex gap-2 relative overflow-hidden">
        {projectState.theme == "winter" ? <Winter /> : null}
        <SideBar
          theme={projectState.theme}
          onLoad={isDataLoading}
          categories={categories}
          onCategoryDelete={onCategoryDeleteHandler}
          onCreateCategory={onCreateCategoryHandler}
          onSelectCategory={onSelectCategoryHandler}
          onTotalExpenses={onTotalExpensesHandler}
        ></SideBar>
        <MainBlock theme={projectState.theme}>{context}</MainBlock>
      </main>
    </>
  );
}

export default App;
