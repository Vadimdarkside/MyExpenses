export default function CategoryBtn({
  style,
  name,
  img,
  color,
  id,
  onCategoryDelete,
  onSelectCategory,
}) {
  const bgColorVariants = {
    blue: "group-hover:bg-blue-300",
    red: "group-hover:bg-red-300",
    green: "group-hover:bg-green-300",
    lime: "group-hover:bg-lime-300",
    sky: "group-hover:bg-sky-300",
    indigo: "group-hover:bg-indigo-300",
    violet: "group-hover:bg-violet-300",
    fuchsia: "group-hover:bg-fuchsia-300",
    pink: "group-hover:bg-pink-300",
  };
  const textColorVariants = {
    blue: "text-blue-500",
    red: "text-red-500",
    green: "text-green-500",
    lime: "text-lime-500",
    sky: "text-sky-500",
    indigo: "text-indigo-500",
    violet: "text-violet-500",
    fuchsia: "text-fuchsia-500",
    pink: "text-pink-500",
  };

  return (
    <>
      <div style={style} className="p-3">
        <button
          onClick={() => {
            onSelectCategory(id);
          }}
          className="group h-[5rem] relative p-3 mb-3 flex justify-between items-center w-[100%] text-3xl hover:bg-stone-800 pr-4 rounded-lg border-b-2"
        >
          <h2 className={textColorVariants[color]}>{name}</h2>
          <div className="relative w-[4rem] h-[4rem]">
            <div
              className={`${bgColorVariants[color]} absolute top-0 w-[4rem] h-[4rem] group-hover:blur-xl `}
            ></div>
            <img
              className="w-[4rem] h-[4rem] absolute top-0"
              src={img}
              alt="category img"
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCategoryDelete(id);
            }}
            className="hidden absolute -right-3 -top-1 group-hover:block hover:bg-gray-400/30 rounded-[1rem]"
          >
            <img
              className="w-5 h-5"
              src="src\\assets\\categories\\close2.png"
              alt=""
            />
          </button>
        </button>
      </div>
    </>
  );
}
