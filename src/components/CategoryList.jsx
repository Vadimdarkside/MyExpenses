import CategoryBtn from "./CategoryBtn";
import "./CategoryList.css";
import { useEffect, useRef, useState } from "react";
import { List, AutoSizer } from "react-virtualized";
import DeleteCategoryModal from "./Modal/DeleteCategoryModal";
export default function Categories({
  categories,
  onCategoryDelete,
  onSelectCategory,
}) {
  const [deleteId, setDeleteId] = useState(null);
  const Modal = useRef();

  const handleCategoryDelete = (id) => {
    setDeleteId(id);
  };

  useEffect(() => {
    //console.log(deleteId);
    if (deleteId) {
      // console.log("Open");
      //console.log(deleteId);
      Modal.current.Open();
    }
  });

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
        <>
          <DeleteCategoryModal
            ref={Modal}
            onApply={() => {
              onCategoryDelete(deleteId);
              setDeleteId(null);
            }}
          />
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
                      onCategoryDelete={handleCategoryDelete}
                      onSelectCategory={onSelectCategory}
                    ></CategoryBtn>
                  );
                }}
              ></List>
            )}
          </AutoSizer>
        </>
      )}
    </>
  );
}
