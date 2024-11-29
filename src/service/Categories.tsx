import { useContext, useState } from "react";
import { useAxios } from "../hook/useAxios";
import { Context } from "../context/Context";
import { useQuery } from "@tanstack/react-query";

interface CategoryType {
  id: string;
  title: string;
}

const Categories = () => {
  const { setCategoryId } = useContext(Context);
  const [isActive, setIsActive] = useState<string>("Все");

  function categoryBtnClick(id: string, title: string): void {
    setIsActive(title);
    setCategoryId(id);
  }

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => useAxios().get("/categories").then((res) => res.data),
  });

  return (
    <div className="flex items-center justify-between">
      <div className="flex space-x-[6px]">
        {categories?.map((category: CategoryType) => (
          <button
            onClick={() => categoryBtnClick(category.id, category.title)}
            className={`py-[14px] px-[30px] ${
              isActive === category.title
                ? "bg-[#282828] text-white"
                : "bg-[#e2e2e2] text-black"
            } cursor-pointer text-center text-[16px] font-semibold rounded-[30px]`}
            key={category.id}
          >
            {category.title}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-[7px]">
        <p className="font-bold text-[14px]">Сортировка по:</p>
        <span className="text-[14px] text-[#FE5F1E]">популярности</span>
      </div>
    </div>
  );
};

export default Categories;
