import React from "react";

const ServiceTableHeader = () => (
  <thead>
    <tr style={styles.tableHeader}>
      <th style={styles.tableCell}>Назва</th>
      <th style={styles.tableCell}>Опис</th>
      <th style={styles.tableCell}>Тривалість</th>
      <th style={styles.tableCell}>Ціна</th>
    </tr>
  </thead>
);

const styles = {
  tableHeader: {
    backgroundColor: "#007bff",
    color: "#fff",
    textAlign: "left",
  },
  tableCell: {
    padding: "10px",
    border: "1px solid #ddd",
  },
};

export default ServiceTableHeader;
