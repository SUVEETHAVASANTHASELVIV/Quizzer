import { useEffect, useState } from "react";
import axios from 'axios';
// import { FaSearch } from "react-icons/fa";

import "../Assets/CSS/SearchBar.css";

export const SearchBar = ({ setResults,categories,setCategories}) => {
 

  useEffect(()=>{
    const fetch = async()=>{
        try{
            const list = await axios.get(`https://opentdb.com/api_category.php`);
            if(list.status!==200)
            {
                throw new Error("Invalid")
            }
        

            const results = list.data.trivia_categories.filter((item) => {
                return categories && item.name.toLowerCase().includes(categories.toLowerCase());
              }).map((category) => ({
                id: category.id,
                name: category.name
              }));
            setResults(results);
        }
        catch(e)
        {
            
        }
    }
    fetch();
   
},[categories])

  

  const handleChange = (value) => {
    setCategories(value);
  };

  return (
    <div className="input-wrapper">
      {/* <FaSearch id="search-icon" /> */}
      <input
        placeholder="Type to search..."
        value={categories}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
