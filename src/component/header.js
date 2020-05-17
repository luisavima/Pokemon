import React from "react";
import logoPokemon from "../images/logoPokemon.jpg";

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col text-center mb-4">
          <img
            className="img-fluid"
            src={logoPokemon}
            style={{ width: "200px", height: "100px" }}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Header;
