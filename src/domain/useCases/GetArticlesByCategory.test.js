import GetArticlesByCategory from './GetArticlesByCategory';
import ArticleRepository from '../ports/ArticleRepositoryInterface';


//Test de la récupération de la liste des articles par catégories.
describe('GetArticlesByCategory', () => {
  it('Récupération de la liste des articles par catégorie', async () => {
    const mockArticles = [{ id: 1, title: 'Test Article', tag: 'news' }];
    const mockRepo = new ArticleRepository();
    mockRepo.getArticlesByCategory = jest.fn().mockResolvedValue(mockArticles);

    const getArticlesByCategory = new GetArticlesByCategory(mockRepo);
    const articles = await getArticlesByCategory.execute('news');

    expect(articles).toEqual(mockArticles);
    expect(mockRepo.getArticlesByCategory).toHaveBeenCalledWith('news');
  });
});

  