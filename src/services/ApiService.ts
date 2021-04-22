import axios from "axios";

class ApiService {
  private ApiUrl = "https://randomuser.me/api/";

  async requestUsers(page: number, quantity: number, nationality: string) {
    try {
      const {
        data: { results: data }
      } = await axios.get(
        `${this.ApiUrl}?page=${page}&results=${quantity}&nat=${nationality}`
      );
      return data;
    } catch (error) {
      console.error("Simple error handling");
    }
  }
}

export default new ApiService();
