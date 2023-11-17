//SearchArticles.js

// Actions spécifiques que les utilisateurs peuvent effectuer. 
// Indépendants de l'infrastructure et des frameworks.
import SearchArticles from './SearchArticles';
import ArticleRepository from '../ports/ArticleRepositoryInterface';

//Fonction de test pour la recherche d'un article.

describe('SearchArticles', () => {
  it('should search and retrieve articles', async () => {
    const mockArticles = [{ id: 1, title: 'Test Article' }];
    const mockRepo = new ArticleRepository();
    mockRepo.searchArticles = jest.fn().mockResolvedValue(mockArticles);

    const searchArticles = new SearchArticles(mockRepo);
    const articles = await searchArticles.execute('Test');

    expect(articles).toEqual(mockArticles);
    expect(mockRepo.searchArticles).toHaveBeenCalledWith('Test');
  });
});

  