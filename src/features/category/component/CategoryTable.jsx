import React from "react";

const CategoryTable = ({ categories }) => {
  if (!categories || categories.length === 0) {
    return <p>Немає категорій для відображення.</p>;
  }

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Назва</th>
          <th style={styles.th}>Опис</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <td style={styles.td}>{category.name}</td>
            <td style={styles.td}>{category.description}</td>
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
    color: "black",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
};

export default CategoryTable;
