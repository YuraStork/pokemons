import React from "react";
import style from './pokemon.module.css';

const Pokemon: React.FC<any> = (props) => {
  const [pokemon, setPokemon] = React.useState<any>(null);
  React.useEffect(() => {
    setPokemon(props.data);
  }, [props])
  if (!pokemon) return <div></div>
  return <div className={style.card}>
    <div className={style.name__block}>
      <div>{pokemon.name.toUpperCase()}</div>
      <div className={style.id__block}>id: #{pokemon.id < 10 ? '00' : null}{pokemon.id > 9 && pokemon.id < 100 ? '0' : null}{pokemon.id}</div>
    </div>
    <div className={style.image__block}><img src={pokemon.sprites.other.dream_world.front_default} className={style.pok_image} alt="" /></div>
    <div className={style.defines__block}>
      <div>Weight: {pokemon.weight}</div>
      <div>Height: {pokemon.height}</div>
    </div>
    <div className={style.abbilities__block}>Abilities
      {pokemon.abilities.map((ab: any, index: any) => {
        return <div key={index}>{++index}.{ab.ability.name}</div>
      })}
    </div>
  </div>
}
export default Pokemon;