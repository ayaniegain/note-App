import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    const formattedItems = storedItems.map(item => ({
      id: item.id,
      name: item.title 
    }));
    setItems(formattedItems);
  }, []);

  const handleOnSearch = (string, results) => {
    // console.log('Search string:', string);
    // console.log('Search results:', results);
  };

  const handleOnSelect = (item) => {
    navigate(`/details/${item.id}`);
  };

  const formatResult = (item) => {
    return (
      <span style={{ display: 'block', textAlign: 'left' }}>
        {item.name}
      </span>
    );
  };

  return (
    <header className="h-10 w-40">
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleOnSearch}
        onSelect={handleOnSelect}
        autoFocus
        formatResult={formatResult}
        placeholder="Search item"
      />
    </header>
  );
}

export default Search;
