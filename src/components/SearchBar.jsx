import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Llama a onSearch con la nueva consulta en cada cambio
  };

  return (
    <div className="text-center my-5">
      <input
        className="mb-5 px-5 py-2 rounded-lg"
        type="text"
        placeholder="playlits name"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}
