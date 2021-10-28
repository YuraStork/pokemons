import React from "react";
import style from './pokemon.module.css';
import { NavLink } from "react-router-dom";

const Pokemon: React.FC<any> = React.memo((props) => {
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

    <div className={style.image__block}>
      <img src={pokemon.sprites.other.dream_world.front_default
        ? pokemon.sprites.other.dream_world.front_default
        : (pokemon.sprites.other['official-artwork']['front_default']
          ? pokemon.sprites.other['official-artwork']['front_default'] : pokemon.sprites.other.home.front_default
            ? pokemon.sprites.other.home.front_default
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png')} className={style.pok_image} alt="" /></div>

    <div className={style.defines__block}>
      <div>Weight: {pokemon.weight}</div>
      <div>Height: {pokemon.height}</div>
    </div>

    <div className={style.abbilities__block}>Abilities
      {pokemon.abilities.map((ab: any, index: any) => {
        return <div key={index}>{++index}.{ab.ability.name}</div>
      })}
    </div>
    <div className={style.navlink__block}><NavLink className={style.navlink} to={`/pokemons/${pokemon.id}`}>Перейти на сторінку</NavLink></div>
  </div>
})
export default Pokemon;