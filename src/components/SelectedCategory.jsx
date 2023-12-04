export default function SelectedCategory({ category }) {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[80%]">
      <h1 className="text-3xl font-serif font-bold">
        Info about the category {category.name}
      </h1>
    </div>
  );
}
