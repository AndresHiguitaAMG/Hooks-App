import React from "react";
// import { memo } from "react";

// Hay dos maneras de importar el metodo memo, 
// pero hay que tener en cuenta si trabajamos con create-react-app o vite, 
// ya que cambia la manera de importar
export const Small = React.memo(({ value }) => {
    console.log("Me volvi a dibujar :(");

  return (
    <small>{value}</small>
  )
});
