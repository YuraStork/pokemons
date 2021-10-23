import axios from "axios";
import React from "react";
import Pokemon from "./pokemon";

const PokemonContainer: React.FC<any> = (props) => {
  const [pokemonData, setPokemonData] = React.useState<any>(null);
  React.useEffect(() => {
    const Fetch = async () => {
      const res: any = await axios.get(props.url);
      setPokemonData(res.data);
    }
    Fetch();
  }, [props])
  if (!props) return <div>loading...</div>
  return <Pokemon data={pokemonData} />
}
export default PokemonContainer;