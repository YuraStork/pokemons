import axios from 'axios';
import React from 'react';
import Pokemon from './pokemon/pokemon';
import style from './pokemons.module.css';

const Pokemons: React.FC<any> = (props) => {
  const [pokemonsArray, setPokemons] = React.useState<any>(null);
  const [value, setValue] = React.useState('');
  const [page, setPage] = React.useState(props.currentPage);
  React.useEffect(() => {
    const Fetch = async () => {
      const arrPagesL: any = [];
      if (props.pokemons) {
        props.pokemons.map((pok: any) => {
          arrPagesL.push(axios.get(pok.url).then((pok: any) => pok.data))
        })
        const promiseArr = await Promise.all(arrPagesL);
        setPokemons(promiseArr)
      }
      else {
        setPokemons([])
      }
    }
    Fetch();
  }, [props])

  if (!pokemonsArray) return <div>loading...</div>
  const numberOfPages = Math.ceil(props.count / props.maxCards);
  const arrPages = [];
  console.log('Page',page)
  for (let i = 1; i <= numberOfPages; i++) arrPages.push(i);
  console.log('pokemonsArray', pokemonsArray);

  const sortedBy = (attr: 'weight' | 'height', at: 'dec' | 'inc') => {
    const arr: any = [...pokemonsArray];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (at == 'inc') {
          if (arr[i][attr] < arr[j][attr]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
          }
        } else {
          if (arr[i][attr] > arr[j][attr]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
          }
        }
      }
    }
    setPokemons(arr);
  }
  const filterPokemons = pokemonsArray.filter((pokemon: any) => {
    return pokemon.name.toLowerCase().includes(value.toLowerCase());
  });

  return <div className={style.pokemons}>
    <div className={style.navigation}>
      <div>
        <button disabled={page <= 5} onClick={() => { props.withPrev(); setPage(page - 5) }}> prev </button>
        {arrPages.map((p: number, index) => {
          if (p == 1) {
            return (
              <span key={p} className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => props.withGetPokemonsNavigation(props.maxCards, index, p, props.maxCards)}>{p}</span>)
          }
          else if (p >= page && p < page + 5) {
            return (
              <span key={p} className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => props.withGetPokemonsNavigation(props.maxCards, index, p, props.maxCards)}>{p}</span>)
          }

          else if (p == arrPages.length) {
            return (
              <span><span>...</span><span key={p} className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => {props.withGetPokemonsNavigation(props.maxCards, index, p, props.maxCards); setPage(arrPages.length-5)}}>{p}</span></span>)
          }
        })}

        <button disabled={page > arrPages.length - 6} onClick={() => { props.withNext(); setPage(page + 5) }}>next</button>
      </div>
      <select defaultValue='10' onChange={(event) => { props.withSetMaxCards(+event.target.value);setPage(1) }}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
      </select>
      <div className={style.filter__block}>
        <input type="text" onChange={(event) => setValue(event.target.value)} />
        <button onClick={() => sortedBy('weight', 'dec')}>weigth</button>
        <button onClick={() => sortedBy('height', 'inc')}>height</button>
      </div>
    </div>
    <div className={style.card__wrapper}>
      {filterPokemons.map((pok: any) => { return <Pokemon key={pok.id} data={pok} /> })}
    </div>
  </div>
}
export default Pokemons;