import { useState, Suspense, lazy, useEffect } from "react";
import SideBar from "./components/SideBar";
import CATEGORIES_DATA from "./data/CATEGORIES_DATA";
import MainBlock from "./components/MainBlock";
import NoCategorySelected from "./components/NoCategorySelected";
import NewCategory from "./components/NewCategory";
import LoadingAnimation from "./components/LoadingAnimation";
import useLocalStorage from "./hooks/useLocalStorage";

const SelectedCategory = lazy(() =>
  //тимчасова затримка імпорту
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => import("./components/SelectedCategory")),
);

function App() {
  const [projectState, setProjectState] = useState({
    selectedCategoryId: undefined,
    // categories: [],
    // onLoad: true,
  });
  const [data, setData, isDataLoading] = useLocalStorage(
    "categories",
    CATEGORIES_DATA,
  );
  // useEffect(() => {
  //   setTimeout(() => {
  //     const storedCategories =
  //       JSON.parse(localStorage.getItem("categories")) || [];
  //     if (storedCategories.length !== 0) {
  //       setProjectState((prev) => {
  //         return {
  //           ...prev,
  //           onLoad: false,
  //           categories: storedCategories,
  //         };
  //       });
  //     } else {
  //       //любі друзі! Це муляж дати, коли допишете категорії, якшо допишете), треба буде прибрать
  //       setProjectState((prev) => {
  //         return {
  //           ...prev,
  //           onLoad: false,
  //           categories: CATEGORIES_DATA,
  //         };
  //       });
  //     }
  //   }, 1000);
  // }, []);

  const onCategoryDeleteHandler = (id) => {
    const filteredCategories = data.filter((category) => category.id !== id);
    setData(filteredCategories);
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
    let category = data.find(
      (item) => item.id === projectState.selectedCategoryId,
    );
    context = (
      <Suspense fallback={LoadingAnimation}>
        <SelectedCategory category={category} />
      </Suspense>
    );
  }

  return (
    <main className="h-[100%] my-8 flex gap-2">
      <SideBar
        onLoad={isDataLoading}
        categories={data}
        onCategoryDelete={onCategoryDeleteHandler}
        onCreateCategory={onCreateCategoryHandler}
        onSelectCategory={onSelectCategoryHandler}
      ></SideBar>
      <MainBlock>{context}</MainBlock>
    </main>
  );
}

export default App;
