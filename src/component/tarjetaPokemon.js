import React from "react";
import { Link } from "react-router-dom";

function TarjetaPokemon({ name, image, numPokemon, to }) {
  return (
    <div className="d-flex justify-content-center col-sm-12 col-md-6 col-lg-4 mt-2">
      <div className="card" style={{ width: "16rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={to}>
            <h5 className="card-title text-center">{name}</h5>
          </Link>
          <p className="card-text text-center">
            Numero de pokemon: {numPokemon}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TarjetaPokemon;
