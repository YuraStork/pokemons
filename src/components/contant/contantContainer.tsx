import React from "react";
import { connect } from "react-redux";
import { withGetPokemons } from "../../redux/mainpage-reducer";
import Preloader from "../preloader/preloader";
import Content from "./contant";

const ContantContainer: React.FC<any> = (props) => {
  React.useEffect(() => {
    const Fetch = async () => {
      await props.withGetPokemons(props.maxCards);
    }
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