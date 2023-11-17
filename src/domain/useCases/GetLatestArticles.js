//GetLatestAricles.js

// Actions spécifiques que les utilisateurs peuvent effectuer. 
// Indépendants de l'infrastructure et des frameworks.

//Récupération de la liste des derniers articles.
class GetLatestArticles {
    constructor(articleRepository) {
      if (!articleRepository) {
        throw new Error("Article repository is required");
      }
      this.articleRepository = articleRepository;
    }
  
    async execute() {
      try {
        return await this.articleRepository.getLatestArticles();
      } catch (error) {
        throw error;
      }
    }
  }
  
  export default GetLatestArticles;
  