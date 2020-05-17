import React from "react";
import Header from "../component/header";
import FiltroBusqueda from "../component/filtroBusqueda";
import Paginacion from "../component/paginacion";
import TarjetaPokemon from "../component/tarjetaPokemon";
import Footer from "../component/footer";

import axios from "axios";

class Pokemons extends React.Component {
  state = {
    datosPokemon: [],
    todosPokemons: [],
    next: "",
    previous: "",
  };

  componentDidMount() {
    this.traerPokemonsApi();
    this.traerTodosPokemonsApi();
  }

  traerPokemonsApi() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?&limit=25")
      .then((resultado) => {
        const { results, next, previous } = resultado.data;

        this.setState({
          datosPokemon: results,
          next,
          previous,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // traer todos los pokemon para filtro
  async traerTodosPokemonsApi() {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon?&limit=964")
      .then((resultado) => {
        const { results } = resultado.data;
        this.setState({
          todosPokemons: results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // funcion para escuchar el input cuando escriben
  handleChangeBuscarInput = (e) => {
    const valorParaBuscar = e.target.value;
    console.log(valorParaBuscar);
    if (valorParaBuscar !== "") {
      this.buscarPokemon(e.target.value);
    } else {
      this.traerPokemonsApi();
    }
  };

  // funcion para buscar pokemon
  buscarPokemon(buscar) {
    const resultadosInput = this.state.todosPokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().indexOf(buscar.toLowerCase()) !== -1;
    });
    this.setState({ datosPokemon: resultadosInput });
  }

  // pagina anterior
  previousPage = () => {
    const { previous } = this.state;
    axios.get(previous).then((r) => {
      const { results, next, previous } = r.data;
      this.setState({
        datosPokemon: results,
        next,
        previous,
      });
    });
  };

  // pagina siguiente
  nextPage = () => {
    const { next } = this.state;
    axios.get(next).then((r) => {
      const { results, next, previous } = r.data;
      this.setState({
        datosPokemon: results,
        next,
        previous,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <FiltroBusqueda OnchangeFiltro={this.handleChangeBuscarInput} />
        <Paginacion previousPage={this.previousPage} nextPage={this.nextPage} />
        <div className="row">
          {this.state.datosPokemon.map((pokemon, index) => {
            let url = "https://pokeres.bastionbot.org/images/pokemon/";
            let pokeIndex = pokemon.url.split("/")[
              pokemon.url.split("/").length - 2
            ];

            return (
              <TarjetaPokemon
                key={index}
                to={`/detalle-pokemon/${pokeIndex}/${pokemon.name}`}
                name={pokemon.name}
                image={`${url}${pokeIndex}.png?raw=true`}
                numPokemon={`${pokeIndex}`}
              />
            );
          })}
        </div>
        <div className="row mt-4">
          <Paginacion
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Pokemons;
