//SearchArticles.js

// Actions spécifiques que les utilisateurs peuvent effectuer. 
// Indépendants de l'infrastructure et des frameworks.

//Fonction recherche d'un article.
class SearchArticles {
    constructor(articleRepository) {
      if (!articleRepository) {
        throw new Error("Article repository is required");
      }
      this.articleRepository = articleRepository;
    }
  
    async execute(searchQuery) {
      try {
        return await this.articleRepository.searchArticles(searchQuery);
      } catch (error) {
        throw error;
      }
    }
  }
  
  export default SearchArticles;
  