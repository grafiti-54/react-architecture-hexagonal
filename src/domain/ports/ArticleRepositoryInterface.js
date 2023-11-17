//ArticleRepositoryInterface.js
// Les ports sont les points d'entrée et de sortie de la couche de domaine.


class ArticleRepositoryInterface {
  // Retourne tous les articles
  getAllArticles() {
    throw new Error("getAllArticles method must be implemented");
  }
  // Retourne les articles appartenant à une catégorie spécifique
  getArticlesByCategory(categoryId) {
    throw new Error("getArticlesByCategory method must be implemented");
  }

  // Retourne les derniers articles publiés
  getLatestArticles() {
    throw new Error("getLatestArticles method must be implemented");
  }
  // Recherche des articles basée sur une requête de recherche
  searchArticles(query) {
    throw new Error("searchArticles method must be implemented");
  }
}

export default ArticleRepositoryInterface;



























/*
  JavaScript n'a pas de concept d'interface intégré, il faut établir un contrat en
   utilisant une classe de base ou un objet qui définit les méthodes que les adaptateurs doivent implémenter.
   Défini la signature des méthodes et lance des erreurs si elles ne sont pas implémentées, 
   manière de simuler le comportement d'une interface en JavaScript classique.
   Les méthodes dans ArticleRepositoryInterface ne contiendront pas de logique métier 
   elles servent seulement de modèles pour les méthodes que les adaptateurs concrets doivent implémenter. 
   La logique métier réelle sera placée dans les cas d'utilisation (useCases) qui appelleront ces méthodes 
   par l'intermédiaire des adaptateurs.
  */
