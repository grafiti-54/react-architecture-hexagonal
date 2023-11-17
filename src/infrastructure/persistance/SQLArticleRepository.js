import ArticleRepositoryInterface from "../../domain/ports/ArticleRepositoryInterface";


class SQLArticleRepository extends ArticleRepositoryInterface {
  constructor(databaseConnection) {
    super();
    this.db = databaseConnection;
  }

  async getAllArticles() {
    // Logique pour récupérer tous les articles de la base de données
  }

  async getArticlesByCategory(categoryId) {
    // Logique pour récupérer les articles par catégorie
  }

  // Autres méthodes
}

export default SQLArticleRepository;
