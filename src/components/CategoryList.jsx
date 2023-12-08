import CategoryBtn from "./CategoryBtn";
import "./CategoryList.css";
import { List, AutoSizer } from "react-virtualized";
export default function Categories({
  categories,
  onCategoryDelete,
  onSelectCategory,
}) {
  return (
    <>
      {categories.length == 0 && (
        <div className="h-[90%] flex justify-center items-center flex-col">
          <img
            src="src\assets\categories\empty-folder2.png"
            alt=""
            className="w-20"
          />
          <div className=" font-mono">Empty</div>
        </div>
      )}
      {categories.length > 0 && (
        <AutoSizer>
          {({ width }) => (
            <List
              width={width}
              height={400}
              rowHeight={100}
              rowCount={categories.length}
              rowRenderer={({ key, index, style, parent }) => {
                const category = categories[index];
                return (
                  <CategoryBtn
                    style={style}
                    id={category.id}
                    key={key}
                    name={category.name}
                    color={category.color}
                    img={category.img}
                    onCategoryDelete={onCategoryDelete}
                    onSelectCategory={onSelectCategory}
                  ></CategoryBtn>
                );
              }}
            ></List>
          )}
        </AutoSizer>
      )}
      {/* {categories.map((item) => (
        <CategoryBtn
          id={item.id}
          key={item.id}
          name={item.name}
          color={item.color}
          img={item.img}
          onCategoryDelete={onCategoryDelete}
          onSelectCategory={onSelectCategory}
        ></CategoryBtn>
      ))} */}
    </>
  );
}
