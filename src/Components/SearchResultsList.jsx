import "../Assets/CSS/SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results,categories,setCategories,setShowResultsList }) => {
  

  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} setCategories={setCategories} setShowResultsList={setShowResultsList}/>;
      })}
    </div>
  );
};
