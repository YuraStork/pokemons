import React from "react";
import { connect } from "react-redux";
import { withGetPokemons } from "../../redux/mainpage-reducer";
import Content from "./contant";

const ContantContainer: React.FC<any> = (props) => {
  React.useEffect(() => {
    props.withGetPokemons(props.maxCards);
  }, [])

  if (!props) return <div>loading...</div>
  return <Content {...props} />
}

const mapStateToProps = (state: any) => {
  return {
    pokemons: state.mainPage.pokemons,
    maxCards: state.mainPage.maxCards
  }
}
export default connect(mapStateToProps, { withGetPokemons })(ContantContainer)