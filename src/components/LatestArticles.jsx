//LatestArticles.jsx

import { useState, useEffect } from "react";
import ApiClient from "./../infrastructure/api/ApiClient";
import ApiArticleRepository from "./../adapters/ApiArticleRepository";
import GetLatestArticles from "../domain/useCases/GetLatestArticles";

//Composant de récupération des derniers articles
const LatestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Créez une instance de ApiClient
    const apiClient = new ApiClient("https://dummyjson.com"); //instance de connexion à la bdd
    const apiArticleRepository = new ApiArticleRepository(apiClient); // interface
    const getLatestArticles = new GetLatestArticles(apiArticleRepository); //récupération des articles
    //console.log(getLatestArticles);

    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const latestArticles = await getLatestArticles.execute();
        console.log("Latest Articles:", latestArticles);
        setArticles(latestArticles);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(articles);
  return (
    <div>
      <h2>Les derniers articles</h2>
      <ul>
        {Array.isArray(articles.posts) &&
          articles.posts.map((article) => (
            <>
              <li key={article.id}>{article.title}</li>
              <p>{article.body}</p>
            </>
          ))}
      </ul>
    </div>
  );
};

export default LatestArticles;
