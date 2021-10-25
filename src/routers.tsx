import { Switch, Route } from "react-router-dom";
import ContantContainer from "./components/contant/contantContainer";
import PokemonsContainer from "./components/pokemons/pokemonsContainer";

const Routers: React.FC = () => {
  return <Switch>
    <Route path='/home' exact render={() => <ContantContainer />} />
    <Route path='/pokemons' exact render={() => <PokemonsContainer />} />
    <Route path='/' render={() => <ContantContainer />} />
  </Switch>
}
export default Routers;