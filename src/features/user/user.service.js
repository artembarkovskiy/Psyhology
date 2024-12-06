import axios from "axios";

class UserService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5054/users", // Replace with your API URL
      timeout: 10000,
    });
  }

  async createUser(user) {
    return await this.httpClient.post("", user);
  }
}

export const userService = new UserService();
