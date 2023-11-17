//ApiClient.test.js
import ApiClient from "./ApiClient";

//!Commande à lancer pour le test
//npx jest src/infrastructure/api/ApiClient.test.js
describe('ApiClient', () => {
  it("Récupération de la liste des articles avec l'api", async () => {
    const apiClient = new ApiClient('https://dummyjson.com');
    const articles = await apiClient.get('/posts');
    console.log('Liste des articles:', articles);

    expect(articles).toBeDefined();
    expect(Array.isArray(articles.posts)).toBe(true);
  });
});










//!Exemple sans jest
// import ApiClient from "./ApiClient";

// const apiClient = new ApiClient('https://dummyjson.com');

// // Test de récupération des données de l'api.
// //npx jest src/infrastructure/api/ApiClient.test.js

// async function testGetArticles() {
//   try {
//     const articles = await apiClient.get('/posts'); // Utilisez le point de terminaison réel fourni par votre API d'actualités
//     console.log('Articles received:', articles);
//   } catch (error) {
//     console.error('Failed to fetch articles:', error);
//   }
// }

// testGetArticles();
