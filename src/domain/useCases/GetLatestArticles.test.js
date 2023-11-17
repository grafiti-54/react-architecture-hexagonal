import GetLatestArticles from './GetLatestArticles';
import ArticleRepository from '../ports/ArticleRepositoryInterface';

//!Commande à lancer pour le test
//npx jest src/domain/useCases/GetLatestArticles.test.js
//Test de la récupération de la liste des derniers articles.
describe('GetLatestArticles', () => {
  it('Récupération de la liste des articles', async () => {
    const mockArticles = [{ id: 1, title: 'Test Article' }];
    const mockRepo = new ArticleRepository();
    mockRepo.getLatestArticles = jest.fn().mockResolvedValue(mockArticles);

    const getLatestArticles = new GetLatestArticles(mockRepo);
    const articles = await getLatestArticles.execute();

    expect(articles).toEqual(mockArticles);
    expect(mockRepo.getLatestArticles).toHaveBeenCalled();
  });
});
