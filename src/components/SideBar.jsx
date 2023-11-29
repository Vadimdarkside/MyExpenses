import Categories from "./Categories";
export default function SideBar() {
  return (
    <aside className="w-[28%] px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase text-3xl text-stone-200">
        Your Categories
      </h2>
      <div className="border-b-4 mb-4"></div>
      <Categories></Categories>
    </aside>
  );
}
