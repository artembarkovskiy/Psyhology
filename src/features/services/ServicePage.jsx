import React, { useEffect, useState } from "react";
import { ServicesService } from "./service/services.service";

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const servicesService = new ServicesService();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await servicesService.getAllServices();
        setServices(data);
        setLoading(false);
      } catch (err) {
        setError("Не вдалося завантажити сервіси.");
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Послуги</h1>

      {/* Список сервісів */}
      <div style={styles.servicesList}>
        {services.map((service) => (
          <div key={service.id} style={styles.serviceCard}>
            <h2>{service.serviceName}</h2>
            <p>{service.serviceDescription}</p>
            <p>
              Тривалість: <strong>{service.timeOfService}</strong>
            </p>
            <p>
              Ціна: <strong>{service.price} грн</strong>
            </p>
          </div>
        ))}
      </div>
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
  servicesList: {
    marginBottom: "40px",
  },
  serviceCard: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "10px",
    backgroundColor: "black",
  },
  formContainer: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: "#f4f4f4",
  },
  input: {
    display: "block",
    width: "100%",
    margin: "10px 0",
    padding: "8px",
    fontSize: "16px",
  },
  textarea: {
    display: "block",
    width: "100%",
    margin: "10px 0",
    padding: "8px",
    fontSize: "16px",
    minHeight: "80px",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ServicePage;
