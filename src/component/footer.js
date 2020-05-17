import React from "react";
import logoPokemon from "../images/pokebola.jpg";

class Footer extends React.Component {
  render() {
    return (
      <div className="row mt-5 mb-3">
        <div className="col text-center">
          <img
            className="img-fluid"
            src={logoPokemon}
            style={{ width: "70px", height: "50px" }}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Footer;
