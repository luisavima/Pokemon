import React from "react";

class filtroBusqueda extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <form>
            <div className="form-group">
              <input
                onChange={this.props.OnchangeFiltro}
                className="form-control"
                type="text"
                placeholder="Busca tu pokemon"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default filtroBusqueda;
