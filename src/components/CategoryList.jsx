import CategoryBtn from "./CategoryBtn";
export default function Categories({ categories }) {
  return (
    <>
      {categories.map((item) => (
        <CategoryBtn
          key={item.id}
          name={item.name}
          color={item.color}
          img={item.img}
        ></CategoryBtn>
      ))}
    </>
  );
}
