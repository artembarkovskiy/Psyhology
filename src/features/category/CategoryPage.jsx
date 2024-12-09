import React, { useEffect, useState } from "react";
import { CategoryService } from "./service/category.service";

const CategoryPage = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const load = async () => {
      const categoryService = new CategoryService();
      const response = await categoryService.getAllCategory();

      setList(response);
    };
    load();
  }, []);
  return (
    <div>
      <h1>Categories</h1>
      {list.length}
    </div>
  );
};

export default CategoryPage;
