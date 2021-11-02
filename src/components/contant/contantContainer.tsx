import React from "react";
import { connect } from "react-redux";
import { withGetPokemons } from "../../redux/mainpage-reducer";
import Preloader from "../preloader/preloader";
import Content from "./contant";

const ContantContainer: React.FC<any> = (props) => {
  const Fetch = async () => {
    await props.withGetPokemons(props.maxCards);
  }
  React.useEffect(() => {
    Fetch();
  }, [])

  if (!props) return <div><Preloader /></div>
  return <Content {...props} />
}

const mapStateToProps = (state: any) => {
  return {
    pokemons: state.mainPage.pokemons,
    maxCards: state.mainPage.maxCards
  }
}
export default connect(mapStateToProps, { withGetPokemons })(ContantContainer)