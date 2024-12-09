import React from "react";
import ServiceTableHeader from "./ServiceTableHeader";
import ServiceTableRow from "./ServiceTableRow";

const ServiceTable = ({ services }) => (
  <table style={styles.table}>
    <ServiceTableHeader />
    <tbody>
      {services.map((service) => (
        <ServiceTableRow key={service.id} service={service} />
      ))}
    </tbody>
  </table>
);

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
  },
};

export default ServiceTable;
