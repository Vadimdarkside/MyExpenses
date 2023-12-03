import CategoryBtn from "./CategoryBtn";
export default function Categories({
  categories,
  onCategoryDelete,
  onSelectCategory,
}) {
  return (
    //here map with list------------------------------->
    <>
      {categories.map((item) => (
        <CategoryBtn
          id={item.id}
          key={item.id}
          name={item.name}
          color={item.color}
          img={item.img}
          onCategoryDelete={onCategoryDelete}
          onSelectCategory={onSelectCategory}
        ></CategoryBtn>
      ))}
    </>
  );
}
