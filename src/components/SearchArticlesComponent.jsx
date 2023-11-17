//SearchArticlesComponent.jsx

import { useState } from 'react';
import ApiClient from './../infrastructure/api/ApiClient';
import ApiArticleRepository from './../adapters/ApiArticleRepository';
import SearchArticles from './../domain/useCases/SearchArticles';


const SearchArticlesComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!searchQuery) return;

        const apiClient = new ApiClient('https://dummyjson.com');
        const apiArticleRepository = new ApiArticleRepository(apiClient);
        const searchArticles = new SearchArticles(apiArticleRepository);

        setIsLoading(true);
        try {
            const results = await searchArticles.execute(searchQuery);
            setSearchResults(results.posts);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
            />
            <button onClick={handleSearch}>Search</button>

            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <ul>
                {Array.isArray(searchResults) && searchResults.map((article) => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchArticlesComponent;
