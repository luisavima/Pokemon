import React from "react";
import { Switch, Route } from "react-router-dom";
import Pokemons from "./pages/pokemons";
import DetallePokemons from "./pages/DetallePokemons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Routers extends React.Component {
  render() {
    return (
      <div>
        <Route
          render={({ location }) => (
            <TransitionGroup className="container">
              <CSSTransition
                appear={true}
                key={location.key}
                timeout={{ enter: 400, exit: 200 }}
                classNames="fade"
              >
                <div className="inner">
                  <Switch key={location.key} location={location}>
                    <Route exact path="/" component={Pokemons} />
                    <Route exact path="/pokemons" component={Pokemons} />
                    <Route
                      exact
                      path="/detalle-pokemon/:pokeIndex/:pokeName"
                      component={DetallePokemons}
                    />
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default Routers;
