import React from "react";
import style from './pokemon.module.css';

const Pokemon: React.FC<any> = (props) => {
  const [pokemon, setPokemon] = React.useState<any>(null);
  React.useEffect(() => {
    setPokemon(props.data);
  }, [props])
  if (!pokemon) return <div>loading...</div>

  return <div className={style.card}>
    <div>id: #{pokemon.id}</div>
    <div><img src={pokemon.sprites.other.dream_world.front_default} className={style.pok_image} alt="" /></div>
    
    <div>Abilities
      {pokemon.abilities.map((ab: any, index: any) => {
        return <div key={index}>{++index}{ab.ability.name}</div>
      })}
    </div>
    <div>{pokemon.name}</div>
    <div>weight:{pokemon.weight}</div>
    <div>height:{pokemon.height}</div>

  </div>
}
export default Pokemon;