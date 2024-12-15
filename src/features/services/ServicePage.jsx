import React, { useState, useEffect } from "react";
import { ServicesService } from "./service/services.service";
import ServiceTable from "./component/ServiceTable";

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    serviceName: "",
    serviceDescription: "",
    timeOfService: "",
    price: 0,
  });

  const serviceService = new ServicesService();

  // Завантажуємо всі сервіси при першому рендері
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const fetchedServices = await serviceService.getAllServices();
        setServices(fetchedServices);
      } catch (error) {
        console.error("Помилка при завантаженні сервісів:", error);
      }
    };
    fetchServices();
  }, []);

  const handleCreateService = async (e) => {
    e.preventDefault();

    // Перевірка на коректність введених даних
    if (
      !newService.serviceName ||
      !newService.serviceDescription ||
      !newService.timeOfService ||
      isNaN(newService.price) ||
      newService.price <= 0
    ) {
      alert("Будь ласка, заповніть всі поля коректно.");
      return;
    }

    try {
      const createdService = await serviceService.createServices(newService);
      setServices([...services, createdService]);
      setNewService({
        serviceName: "",
        serviceDescription: "",
        timeOfService: "",
        price: 0,
      });
    } catch (error) {
      console.error("Помилка при додаванні сервісу:", error);
    }
  };

  const handleDeleteService = async (id) => {
    try {
      await serviceService.deleteServiceById(id);
      setServices(services.filter((service) => service.id !== id));
    } catch (error) {
      console.error("Помилка при видаленні сервісу:", error);
    }
  };

  return (
    <div>
      <h1>Сервіси</h1>
      <form onSubmit={handleCreateService}>
        <input
          type="text"
          placeholder="Назва сервісу"
          value={newService.serviceName}
          onChange={(e) =>
            setNewService({ ...newService, serviceName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Опис сервісу"
          value={newService.serviceDescription}
          onChange={(e) =>
            setNewService({ ...newService, serviceDescription: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Тривалість сервісу"
          value={newService.timeOfService}
          onChange={(e) =>
            setNewService({ ...newService, timeOfService: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Ціна"
          value={newService.price || ""}
          onChange={(e) =>
            setNewService({
              ...newService,
              price: e.target.value ? parseFloat(e.target.value) : 0,
            })
          }
        />
        <button type="submit">Додати сервіс</button>
      </form>
      <ServiceTable services={services} onDelete={handleDeleteService} />
    </div>
  );
};

export default ServicePage;
