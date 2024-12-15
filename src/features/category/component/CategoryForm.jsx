import React, { useState } from "react";

const CategoryForm = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;

    onCreate({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Назва категорії"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <textarea
        placeholder="Опис категорії"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={styles.textarea}
      />
      <button type="submit" style={styles.submitButton}>
        Створити
      </button>
    </form>
  );
};

const styles = {
  form: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
  },
  textarea: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    minHeight: "80px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CategoryForm;
