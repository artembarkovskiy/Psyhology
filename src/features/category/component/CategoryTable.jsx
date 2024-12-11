import React from "react";

const CategoryTable = ({ categories, onDelete }) => {
  if (!categories || categories.length === 0) {
    return <p>Немає категорій для відображення.</p>;
  }

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Назва</th>
          <th style={styles.th}>Опис</th>
          <th style={styles.th}>Дії</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <td style={styles.td}>{category.name}</td>
            <td style={styles.td}>{category.description}</td>
            <td style={styles.td}>
              <button
                onClick={() => onDelete(category.id)}
                style={styles.deleteButton}
              >
                Видалити
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    padding: "10px",
    backgroundColor: "#f4f4f4",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

export default CategoryTable;
