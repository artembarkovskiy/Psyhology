import React from "react";

const ServiceTable = ({ services, onDelete }) => {
  if (!services || services.length === 0) {
    return <p>Немає сервісів для відображення.</p>;
  }

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Назва</th>
          <th style={styles.th}>Опис</th>
          <th style={styles.th}>Тривалість</th>
          <th style={styles.th}>Ціна</th>
          <th style={styles.th}>Дії</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service) => (
          <tr key={service.id}>
            <td style={styles.td}>{service.serviceName}</td>
            <td style={styles.td}>{service.serviceDescription}</td>
            <td style={styles.td}>{service.timeOfService}</td>
            <td style={styles.td}>{service.price}</td>
            <td style={styles.td}>
              <button
                onClick={() => onDelete(service.id)}
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

export default ServiceTable;
