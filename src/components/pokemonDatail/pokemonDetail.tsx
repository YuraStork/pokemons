import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import Preloader from "../preloader/preloader";
import style from './pokemonDetail.module.css';

const PokemonDetail: React.FC<any> = (props) => {
  const [pokemon, setPokemon] = React.useState<any>();
  React.useEffect(() => {
    const Fetch = async () => {
      const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.pokId}`);
      setPokemon(pokemon.data)
    }
    Fetch();
  }, [])
  if (!pokemon) return <div><Preloader /></div>
  return <div className={style.pokemon__block}>

    <div className={style.wrapper}>
      <div className={style.image__block}>
        <img src={pokemon.sprites.other.dream_world.front_default
          ? pokemon.sprites.other.dream_world.front_default
          : (pokemon.sprites.other['official-artwork']['front_default']
            ? pokemon.sprites.other['official-artwork']['front_default'] : pokemon.sprites.other.home.front_default)} className={style.image} alt="" />
      </div>

      <div className={style.defines__block}>
        <div className={style.defines}>
          <div>Name: {pokemon.name.toUpperCase()}</div>
          <div className={style.id__block}>id: #{pokemon.id < 10 ? '00' : null}{pokemon.id > 9 && pokemon.id < 100 ? '0' : null}{pokemon.id}</div>
          <div>Weight: {pokemon.weight}</div>
          <div>Height: {pokemon.height}</div>
        </div>

        <div className={style.abbilities__block}>Abilities
          {pokemon.abilities.map((ab: any, index: any) => {
            return <div key={index}>{++index}.{ab.ability.name}</div>
          })}
        </div>
      </div>

      <div className={style.icons}>
        <div className={style.titleIcons}>Sprites</div>
        {pokemon.sprites.back_default ? <img src={pokemon.sprites.back_default} alt="" /> : null}
        {pokemon.sprites.back_female ? <img src={pokemon.sprites.back_female} alt="" /> : null}
        {pokemon.sprites.back_shiny ? <img src={pokemon.sprites.back_shiny} alt="" /> : null}
        {pokemon.sprites.back_shiny_female ? <img src={pokemon.sprites.back_shiny_female} alt="" /> : null}
        {pokemon.sprites.front_default ? <img src={pokemon.sprites.front_default} alt="" /> : null}
        {pokemon.sprites.front_female ? <img src={pokemon.sprites.front_female} alt="" /> : null}
        {pokemon.sprites.front_shiny ? <img src={pokemon.sprites.front_shiny} alt="" /> : null}
        {pokemon.sprites.front_shiny_female ? <img src={pokemon.sprites.front_shiny_female} alt="" /> : null}
      </div>
      <div className={style.btn__block}>
        <NavLink to='/pokemons' className='navlink'><Button variant='contained'color='secondary'>Назад</Button></NavLink>
      </div>
    </div>

  </div>
}
export default withRouter(PokemonDetail);