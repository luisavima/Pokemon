import React from "react";
import "../styles/styles.css";

function descripcionPokemon({
  imagenPokemon,
  name,
  descripcion,
  height,
  weight,
  types,
  abilities,
}) {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <img
          className="img-fluid"
          style={{ width: "25rem", height: "25rem" }}
          src={imagenPokemon}
          alt=""
        />
      </div>

      <div className="col-sm-12 col-md-6 col-lg-6">
        <h1>{name}</h1>
        <p>{descripcion}</p>
        <p>
          <strong>Altura: </strong>
          {height}
        </p>
        <p>
          <strong>Peso: </strong>
          {weight}
        </p>
        <p>
          <strong>Tipos: </strong>
          {types.map((item, idx) => {
            return <span key={idx}> {item.type.name}</span>;
          })}
        </p>
        <p>
          <strong>Habilidades: </strong>
          {abilities.map((item, idx) => {
            return <span key={idx}>{item.ability.name} </span>;
          })}
        </p>
      </div>
    </div>
  );
}

export default descripcionPokemon;
