import CategoryList from "./CategoryList";
export default function SideBar({
  categories,
  onCategoryDelete,
  onCreateCategory,
  onSelectCategory,
}) {
  return (
    <aside className="w-[30%] h-[100vh] px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase text-3xl text-stone-200">
        Your Categories
      </h2>
      <div className="border-b-4"></div>
      <button
        onClick={onCreateCategory}
        className="w-[100%] text-xl p-4 border-b-4 mb-4 hover:bg-stone-800"
      >
        New Category
      </button>
      <CategoryList
        categories={categories}
        onCategoryDelete={onCategoryDelete}
        onSelectCategory={onSelectCategory}
      />
    </aside>
  );
}
