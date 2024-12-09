import React, { useEffect, useState } from "react";
import { CategoryService } from "./service/category.service";
import CategoryTable from "./component/CategoryTable";
import { useNavigate } from "react-router-dom"; // Імпортуємо useNavigate

const CategoryPage = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate(); // Використовуємо хук для навігації

  useEffect(() => {
    const load = async () => {
      const categoryService = new CategoryService();
      const response = await categoryService.getAllCategory();
      setList(response);
    };
    load();
  }, []);

  // Функція для повернення на головну сторінку
  const handleGoHome = () => {
    navigate("/"); // Перенаправлення на головну сторінку
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Категорії</h1>
      <CategoryTable categories={list} />
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
