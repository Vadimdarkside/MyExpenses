import { useState } from "react";
import SideBar from "./components/SideBar";
import CATEGORIES_DATA from "./data/CATEGORIES_DATA";
import MainBlock from "./components/MainBlock";
function App() {
  const [projectState, setProjectState] = useState({
    selectedCategoryId: undefined,
    //Якшо андефінед - потім будем рендерить в 'context' повідомлення, шоб користувач вибрав категорію
    // null - рендерим форму для створення категорії
    // якшо буде якась ід записана - рендерим інфу по даній категорії
    categories: CATEGORIES_DATA,
  });
  // Вадім - зробить якусь взаємодію зі стейтом
  //Модалку зробиш чи нє?
  return (
    <main className="h-[100%] my-8 flex gap-2">
      <SideBar categories={projectState.categories}></SideBar>
      <MainBlock>{/* context*/}</MainBlock>
    </main>
  );
}

export default App;
