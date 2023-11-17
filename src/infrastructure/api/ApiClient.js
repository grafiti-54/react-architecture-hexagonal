//ApiClient.js
// Configuration des clients API, les bases de données, ou tout autre outil externe nécessaire.
import axios from 'axios';

class ApiClient {
  constructor(baseUrl) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    });
  }

  async get(endpoint) {
    try {
      const response = await this.axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error making GET request:', error);
      throw error;
    }
  }
}

export default ApiClient;

  