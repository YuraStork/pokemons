import { Route } from "react-router-dom";
import ContantContainer from "./components/contant/contantContainer";
import Header from "./components/header/header";
import PokemonsContainer from "./components/pokemons/pokemonsContainer";
import Routers from "./routers";

function App() {
  return (
    <div className="App_section">
      <Header />
      <Routers />
      <footer>footer</footer>
    </div>
  );
}

export default App;
