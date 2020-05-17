import React, { Component } from "react";
import Header from "../component/header";
import DescripcionPokemon from "../component/descripcionPokemon";
import Footer from "../component/footer";
import axios from "axios";

class DetallePokemons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonDescripcion: "",
      pokeName: "",
      pokeId: "",
      height: "",
      weight: "",
      types: [],
      abilities: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const pokeId = match.params.pokeIndex;
    const pokeName = match.params.pokeName;
    const descripcionPokemonUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`;
    this.getPokeStats();
    axios.get(descripcionPokemonUrl).then((res) => {
      const { flavor_text_entries } = res.data;
      this.setState({
        pokemonDescripcion: flavor_text_entries[11].flavor_text,
        pokeName,
        pokeId,
      });
    });
  }

  // obtener estadisticas, peso, altura, etc
  getPokeStats() {
    const { match } = this.props;
    const pokeId = match.params.pokeIndex;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`).then((res) => {
      const { height, weight, types, abilities } = res.data;
      this.setState({
        height,
        weight,
        types,
        abilities,
      });
    });
  }

  render() {
    let url = "https://pokeres.bastionbot.org/images/pokemon/";

    const {
      pokemonDescripcion,
      pokeName,
      pokeId,
      height,
      weight,
      types,
      abilities,
    } = this.state;
    return (
      <div className="container">
        <Header />
        <DescripcionPokemon
          name={pokeName}
          imagenPokemon={`${url}${pokeId}.png?raw=true`}
          descripcion={pokemonDescripcion}
          height={height}
          weight={weight}
          types={types}
          abilities={abilities}
        />
        <Footer />
      </div>
    );
  }
}

export default DetallePokemons;
