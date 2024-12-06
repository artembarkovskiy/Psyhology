import { HttpClient } from "../../../utils/http/httpClient";

export class CategoryService {
  constructor(signal) {
    this.httpClient = new HttpClient({
      baseURL: "http://localhost:5054/categories",
      timeout: 10000,
      signal,
    });
  }

  async getAllCategory() {
    return await this.httpClient.get("");
  }

  async createCategory(category) {
    return await this.httpClient.post("", category);
  }

  async deleteCategoryById(id) {
    return await this.httpClient.delete(`/${id}`);
  }
}
