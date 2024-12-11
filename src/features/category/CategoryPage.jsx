import React, { useEffect, useState } from "react";
import { CategoryService } from "./service/category.service";
import CategoryTable from "./component/CategoryTable";
import CategoryForm from "./component/CategoryForm";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const categoryService = new CategoryService();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoryService.getAllCategory();
        setCategories(data);
      } catch (err) {
        setError("Не вдалося завантажити категорії.");
      }
    };

    fetchCategories();
  }, []);

  const handleCreateCategory = async (newCategory) => {
    try {
      const createdCategory = await categoryService.createCategory(newCategory);
      setCategories((prev) => [...prev, createdCategory]);
    } catch {
      setError("Не вдалося створити категорію.");
    }
  };

  const handleDeleteCategory = async (id) => {
    console.log("Видаляємо категорію з id:", id);
    try {
      await categoryService.deleteCategoryById(id);
      setCategories(categories.filter((category) => category.Id !== id));
    } catch (error) {
      console.error("Помилка під час видалення:", error);
    }
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Категорії</h1>
      {error && <p style={styles.error}>{error}</p>}
      <CategoryForm onCreate={handleCreateCategory} />
      <CategoryTable categories={categories} onDelete={handleDeleteCategory} />
      <button onClick={handleGoHome} style={styles.goHomeButton}>
        На головну
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  error: {
    textAlign: "center",
    color: "red",
  },
  goHomeButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default CategoryPage;
