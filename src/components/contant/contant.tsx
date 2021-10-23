import { useEffect, useState } from "react";
import CardContainer from "./card/cardContainer";
import style from './contant.module.css'
const Content: React.FC = (props: any) => {
  const [pokemons, setPokemons] = useState<any>(null);
  useEffect(() => {
    setPokemons(props.pokemons);
  }, [props.pokemons])

  if (!pokemons) return <div>loading...</div>
  return <div className={style.contant}>
    <div className={style.card__wrapper}>
      {
        pokemons.map((i: any) => {
          return (
            <CardContainer key={i.name} {...i} />
          )
        })}
    </div>
  </div>
}
export default Content;