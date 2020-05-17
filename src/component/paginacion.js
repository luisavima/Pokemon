import React from "react";

class Paginacion extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary mr-3"
            onClick={this.props.previousPage}
          >
            Atras
          </button>
          <button className="btn btn-primary" onClick={this.props.nextPage}>
            Siguiente
          </button>
        </div>
      </div>
    );
  }
}

export default Paginacion;
