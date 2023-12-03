import { useState } from "react";
import SideBar from "./components/SideBar";
import CATEGORIES_DATA from "./data/CATEGORIES_DATA";
import MainBlock from "./components/MainBlock";
import NoCategorySelected from "./components/NoCategorySelected";
import NewCategory from "./components/NewCategory";
import SelectedCategory from "./components/SelectedCategory";
function App() {
  const [projectState, setProjectState] = useState({
    selectedCategoryId: undefined,
    categories: CATEGORIES_DATA,
  });

  const onCategoryDeleteHandler = (id) => {
    setProjectState((prevState) => {
      const filteredCategories = prevState.categories.filter(
        (category) => category.id !== id,
      );

      return {
        ...prevState,
        categories: filteredCategories,
      };
    });
  };
  const onCreateCategoryHandler = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedCategoryId: null,
      };
    });
  };
  const onSelectCategoryHandler = (id) => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedCategoryId: id,
      };
    });
  };

  let context;
  if (projectState.selectedCategoryId === undefined) {
    context = <NoCategorySelected onCreateCategory={onCreateCategoryHandler} />;
  } else if (projectState.selectedCategoryId === null) {
    context = <NewCategory />;
  } else {
    let category = projectState.categories.find(
      (item) => item.id === projectState.selectedCategoryId,
    );
    context = <SelectedCategory category={category} />;
  }

  return (
    <main className="h-[100%] my-8 flex gap-2">
      <SideBar
        categories={projectState.categories}
        onCategoryDelete={onCategoryDeleteHandler}
        onCreateCategory={onCreateCategoryHandler}
        onSelectCategory={onSelectCategoryHandler}
      ></SideBar>
      <MainBlock>{context}</MainBlock>
    </main>
  );
}

export default App;
