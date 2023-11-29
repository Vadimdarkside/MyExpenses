export default function CategoryBtn({ name, img, color }) {
  let styles = `h-[5rem] p-3 py-4 flex justify-between items-center w-[100%] 
  hover:bg-stone-800`;
  return (
    <button className={styles}>
      <h2 className="text-3xl">{name}</h2>
      <img className="w-[4rem]" src={img} alt="category img" />
    </button>
  );
}
