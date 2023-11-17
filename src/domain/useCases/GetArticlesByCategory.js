// Actions spécifiques que les utilisateurs peuvent effectuer. 
// Indépendants de l'infrastructure et des frameworks.


//Récupération de la liste des articles par catégories.
class GetArticlesByCategory {
    constructor(articleRepository) {
      if (!articleRepository) {
        throw new Error("Article repository is required");
      }
      this.articleRepository = articleRepository;
    }
  
    async execute(category) {
      try {
        return await this.articleRepository.getArticlesByCategory(category);
      } catch (error) {
        throw error;
      }
    }
  }
  
  export default GetArticlesByCategory;
  