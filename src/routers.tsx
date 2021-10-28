import { Switch, Route, Redirect } from "react-router-dom";
import ContantContainer from "./components/contant/contantContainer";
import PokemonDetail from "./components/pokemonDatail/pokemonDetail";
import PokemonsContainer from "./components/pokemons/pokemonsContainer";

const Routers: React.FC = () => {
  return <Switch>
    <Route path='/home' exact render={() => <ContantContainer />} />
    <Route path='/pokemons' exact render={() => <PokemonsContainer />} />
    <Route path='/pokemons/:pokId' render={() => <PokemonDetail />} />
    <Redirect to='/home' />
  </Switch>
}
export default Routers;