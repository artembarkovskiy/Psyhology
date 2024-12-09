import React, { useEffect, useState } from "react";
import { ServicesService } from "./service/services.service";
import ServiceTable from "./component/ServiceTable";
import { useNavigate } from "react-router-dom";

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const servicesService = new ServicesService();
  const navigate = useNavigate(); // Використовуємо хук для навігації

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await servicesService.getAllServices();
        setServices(data);
        setLoading(false);
      } catch (err) {
        setError("Не вдалося завантажити послуги.");
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <p style={styles.loading}>Завантаження...</p>;
  if (error) return <p style={styles.error}>{error}</p>;

  // Функція для повернення на домашню сторінку
  const handleGoHome = () => {
    navigate("/"); // Перенаправлення на головну сторінку
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Послуги</h1>
      <ServiceTable services={services} />
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
  loading: {
    textAlign: "center",
    color: "#007bff",
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

export default ServicePage;
