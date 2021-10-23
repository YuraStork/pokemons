import React from "react";
import { connect } from "react-redux";
import { withGetPokemons, withNext, withPrev,withGetPokemonsNavigation } from "../../redux/pokemons-reducer";
import Pokemons from "./pokemons";

const PokemonsContainer = (props: any) => {
  console.log('PROPS',props)
  React.useEffect(() => {
    props.withGetPokemons(props.maxCards, props.offset);
  }, [props.offset]);

  if (!props) return <div>loading...</div>
  return <Pokemons {...props} />
}
const mapStateToProps = (state: any) => {
  return {
    pokemons: state.pokemonsPage.pokemons,
    count: state.pokemonsPage.count,
    offset: state.pokemonsPage.offset,
    maxCards: state.pokemonsPage.maxCards,
    currentPage: state.pokemonsPage.currentPage,
    maxPagesNavigation: state.pokemonsPage.maxPagesNavigation
  }
}

export default connect(mapStateToProps, { withGetPokemons,withGetPokemonsNavigation, withNext, withPrev})(PokemonsContainer);