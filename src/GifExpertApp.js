//rafc snnipet para crear estructura inicial

import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["Demon Slayer"]);

  //Agregando nuevo elemento a la lista
  /* const handleAdd = () => {
    setCategorias([...categorias, "HunterXHunter"]);
  };*/

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />
      <ol>
        {categorias.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
