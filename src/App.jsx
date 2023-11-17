import "./App.css";
import LatestArticles from "./components/LatestArticles";
import SearchArticlesComponent from "./components/SearchArticlesComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>20 minutes hexagonal</h1>
      </header>
      <main>
        <SearchArticlesComponent />
        <LatestArticles />
      </main>
    </div>
  );
}

export default App;
