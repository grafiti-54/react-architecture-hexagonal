//Concepts de base de l'application, comme les articles, les catégories d'actualités, etc.

//Model Article
class Article {
    constructor(id, title, content, category, publishedDate) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.category = category; // En lien avec Category
      this.publishedDate = publishedDate;
    }
  
    // Méthodes supplémentaires liées à l'article peuvent être ajoutées ici.
  }
  
  export default Article;
  