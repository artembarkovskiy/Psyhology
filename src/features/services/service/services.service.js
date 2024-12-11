import { HttpClient } from "../../../utils/http/httpClient";

export class ServicesService {
  constructor(signal) {
    this.httpClient = new HttpClient({
      baseURL: "http://localhost:5054/services",
      timeout: 10000,
      signal,
    });
  }

  async getAllServices() {
    return await this.httpClient.get("");
  }

  async createServices(service) {
    return await this.httpClient.post("", service);
  }

  async deleteServiceById(id) {
    return await this.httpClient.delete(`/${id}`);
  }
}
