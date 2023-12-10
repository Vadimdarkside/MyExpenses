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
import "./App.css";
const SelectedCategory = lazy(() =>
  //тимчасова затримка імпорту
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => import("./components/SelectedCategory")),
);

function App() {
  const [projectState, setProjectState] = useState({
    selectedCategoryId: undefined,
    theme: null,
  });
  const [categories, setCategories, isDataLoading] = useLocalStorage(
    "categories",
    CATEGORIES_DATA,
  );

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
    let category = categories.find(
      (item) => item.id === projectState.selectedCategoryId,
    );
    context = (
      <Suspense fallback={LoadingAnimation}>
        <SelectedCategory category={category} />
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
        {projectState.theme == "winter" ? (
          <Winter theme={projectState.theme} />
        ) : null}
        <SideBar
          theme={projectState.theme}
          onLoad={isDataLoading}
          categories={categories}
          onCategoryDelete={onCategoryDeleteHandler}
          onCreateCategory={onCreateCategoryHandler}
          onSelectCategory={onSelectCategoryHandler}
        ></SideBar>
        <MainBlock theme={projectState.theme}>{context}</MainBlock>
      </main>
    </>
  );
}

export default App;
