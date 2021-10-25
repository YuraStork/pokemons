import React from "react";
import { connect } from "react-redux";
import { withGetPokemons, withNext, withPrev, withGetPokemonsNavigation, withSetMaxCards } from "../../redux/pokemons-reducer";
import Preloader from "../preloader/preloader";
import Pokemons from "./pokemons";

const PokemonsContainer = (props: any) => {
  React.useEffect(() => {
    const Fetch = async () => {
      await props.withGetPokemons(props.maxCards, props.offset);
    }
    Fetch();
  }, [props.maxCards]);

  if (!props) return <div><Preloader /></div>
  return <Pokemons {...props} />
}

const mapStateToProps = (state: any) => {
  return {
    pokemons: state.pokemonsPage.pokemons,
    count: state.pokemonsPage.count,
    offset: state.pokemonsPage.offset,
    maxCards: state.pokemonsPage.maxCards,
    currentPage: state.pokemonsPage.currentPage,
  }
}
export default connect(mapStateToProps, { withGetPokemons, withGetPokemonsNavigation, withNext, withPrev, withSetMaxCards })(PokemonsContainer);