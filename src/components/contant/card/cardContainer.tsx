import axios from "axios";
import React, { useState } from "react"
import Card from "./card"

const CardContainer: React.FC = (props: any) => {
  console.log('CARD CONTAINER', props)
  const [pokemonData, setPokemonData] = useState<any>(null);
  React.useEffect(() => {
    const Fetch = async () => {
      const res: any = await axios.get(props.url);
      setPokemonData(res.data);
    }
    Fetch();
  }, [props])
  return <Card data={pokemonData}/>
}
export default CardContainer;
