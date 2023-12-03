export default function NoCategorySelected({ onCreateCategory }) {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[80%]">
      <h1 className="text-5xl mb-2">Welcome</h1>
      <h2 className="text-3xl">
        Please select your category on the left or create a new one.
      </h2>
      <button
        onClick={onCreateCategory}
        className="p-3 m-2 border-2 rounded-xl font-bold hover:bg-slate-300/50"
      >
        Create new category
      </button>
    </div>
  );
}
