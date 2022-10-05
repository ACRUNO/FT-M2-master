import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState([]);


  function handleChange(e) {
    setCity(e.target.value);
    console.log(city)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={handleChange}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
