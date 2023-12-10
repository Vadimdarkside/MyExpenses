import { lazy, Suspense } from "react";
import LoadingAnimation from "./LoadingAnimation";
import WinterTheme from "./Theme/WinterTheme.module.css";
const CategoryList = lazy(() =>
  //тимчасова затримка імпорту
  new Promise((resolve) => {
    setTimeout(resolve, 500);
  }).then(() => import("./CategoryList")),
);

export default function SideBar({
  theme,
  onLoad,
  categories,
  onCategoryDelete,
  onCreateCategory,
  onSelectCategory,
}) {
  return (
    <aside className="w-[30%] h-[100vh] px-8 py-10 bg-stone-900 text-stone-50 rounded-r-xl z-10">
      <div className="flex flex-row items-end">
        {theme == "winter" ? (
          <div className={WinterTheme.GoslingPngWinter} />
        ) : null}
        <h2 className="mb-8 font-bold uppercase text-3xl text-stone-200">
          Your Categories
        </h2>
      </div>
      <div className="border-b-4"></div>
      <button
        onClick={onCreateCategory}
        className="w-[100%] text-xl p-4 border-b-4 mb-4 hover:bg-stone-800"
      >
        New Category
      </button>
      <Suspense fallback={LoadingAnimation}>
        {onLoad && LoadingAnimation}
        {!onLoad && (
          <CategoryList
            categories={categories}
            onCategoryDelete={onCategoryDelete}
            onSelectCategory={onSelectCategory}
          />
        )}
      </Suspense>
    </aside>
  );
}
