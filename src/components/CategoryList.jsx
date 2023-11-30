import CategoryBtn from "./CategoryBtn";
export default function Categories({ categories, onCategoryDelete }) {
  return (
    <>
      {categories.map((item) => (
        <CategoryBtn
          id={item.id}
          key={item.id}
          name={item.name}
          color={item.color}
          img={item.img}
          onCategoryDelete={onCategoryDelete}
        ></CategoryBtn>
      ))}
    </>
  );
}
