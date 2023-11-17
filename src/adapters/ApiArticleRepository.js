//ApiArticleRepository.js
//Les adaptateurs vont implémenter les interfaces définies par les ports et interagir avec l'infrastructure.
//Pour les appels API

import ArticleRepositoryInterface from '../domain/ports/ArticleRepositoryInterface';
import ApiClient from '../infrastructure/api/ApiClient';

class ApiArticleRepository extends ArticleRepositoryInterface {
  constructor(apiClient) {
    super();
    if (!(apiClient instanceof ApiClient)) {
      throw new Error('An instance of ApiClient is required');
    }
    this.apiClient = apiClient;
  }

  async getAllArticles() {
    try {
      const response = await this.apiClient.get('/articles');
      // Convertir la réponse en instances de l'entité Article si nécessaire
      return response;
    } catch (error) {
      throw new Error('Error fetching articles');
    }
  }

  async getArticlesByCategory(categoryId) {
    try {
      const response = await this.apiClient.get(`/articles?category=${categoryId}`);
      // Convertir la réponse en instances de l'entité Article si nécessaire
      return response;
    } catch (error) {
      throw new Error(`Error fetching articles for category ${categoryId}`);
    }
  }

  async getLatestArticles() {
    try {
      const response = await this.apiClient.get('/posts');
      // Convertir la réponse en instances de l'entité Article si nécessaire
      return response;
    } catch (error) {
      throw new Error('Error fetching latest articles');
    }
  }

  async searchArticles(query) {
    try {
      const response = await this.apiClient.get(`/posts/search?q=${query}`);
      return response;
    } catch (error) {
      throw new Error(`Error searching articles with query "${query}"`);
    }
  }
}

export default ApiArticleRepository;

