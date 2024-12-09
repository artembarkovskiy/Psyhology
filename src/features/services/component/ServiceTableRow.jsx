import React from "react";

const ServiceTableRow = ({ service }) => (
  <tr style={styles.tableRow}>
    <td style={styles.tableCell}>{service.serviceName}</td>
    <td style={styles.tableCell}>{service.serviceDescription}</td>
    <td style={styles.tableCell}>{service.timeOfService}</td>
    <td style={styles.tableCell}>{service.price} грн</td>
  </tr>
);

const styles = {
  tableRow: {
    backgroundColor: "black",
  },
  tableCell: {
    padding: "10px",
    border: "1px solid #ddd",
  },
};

export default ServiceTableRow;
