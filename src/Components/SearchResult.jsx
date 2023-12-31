import "../Assets/CSS/SearchResult.css";

export const SearchResult = ({ result,dacategoriesta,setCategories,setShowResultsList}) => {
 
  const handleClick = () => {
    setCategories(result.name); 
    setShowResultsList(false);


  };

  return (
    <div
      className="search-result"
      onClick={handleClick}
    >
      {result.name}
    </div>
  );
};
