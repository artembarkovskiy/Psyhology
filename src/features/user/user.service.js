import { HttpClient } from "../../utils/http/httpClient";

export class UserService {
  constructor(signal) {
    this.httpClient = new HttpClient({
      baseURL: "http://localhost:5054/users",
      timeout: 10000,
      signal,
    });
  }

  async getAllUsers() {
    return await this.httpClient.get("");
  }

  async createUser(user) {
    return await this.httpClient.post("", user);
  }

  async deleteUserById(id) {
    return await this.httpClient.delete(`/${id}`);
  }

  async loginUser(data) {
    return await this.httpClient.post("/login", data);
  }
}
