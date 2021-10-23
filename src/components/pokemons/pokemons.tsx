import React from 'react';
import PokemonContainer from './pokemon/pokemonContainer';
import style from './pokemons.module.css';

const Pokemons: React.FC<any> = (props) => {
  let [page, setPage] = React.useState(props.currentPage);
  const numberOfPages = Math.ceil(props.count / props.maxCards);
  console.log(numberOfPages)
  const arrPages = [];

  for (let i = page; i <= numberOfPages; i++) {
    arrPages.push(i);
  }
  if (!props.pokemons) return <div>loading...</div>
  return <div className={style.pokemons}>
    <div className={style.navigation}>
      <button onClick={props.withPrev}> prev </button>
      {arrPages.map((p: number, index) => (
        <span key={p} className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => props.withGetPokemonsNavigation(props.maxCards, index, p)}>{p}</span>
      )
      )}
      <button onClick={props.withNext}>next</button>
    </div>

    <div className={style.filter__block}>
      <button onClick={props.withFilterWeight}>weigth</button>
    </div>
    <div className={style.card__wrapper}>
      {
        props.pokemons.map((pok: any) => {
          return <PokemonContainer key={pok.name} {...pok} />
        })
      }
    </div>
  </div>
}
export default Pokemons;