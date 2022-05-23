import React, { useState } from "react";

const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState("");

  const hanldeInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    //Evita que recargue la pagina al ejecutar el submit
    e.preventDefault();
    //Validar que el input contenga la menos 2 caracteres
    if (inputValue.trim().length > 2) {
      setCategorias((categorias) => [inputValue, ...categorias]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={hanldeInputChange} />
    </form>
  );
};

export default AddCategory;
