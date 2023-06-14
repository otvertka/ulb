import axios from "axios";

export default class PostService {
  static async getAll() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/postsffff"
    );
    return response.data;
  }
}
