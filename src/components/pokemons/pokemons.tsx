import { Drawer } from '@mui/material';
import axios from 'axios';
import React from 'react';
import Preloader from '../preloader/preloader';
import PaginatorComponent from './paginator/paginator';
import Pokemon from './pokemon/pokemon';
import style from './pokemons.module.css';

const Pokemons: React.FC<any> = React.memo((props) => {
  const [pokemonsArray, setPokemons] = React.useState<any>(null);
  const [openFilters, setOpenFilters] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [loader, setLoader] = React.useState(false);

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

  if (loader) return <div><Preloader /></div>
  if (!pokemonsArray) return <div><Preloader /></div>
  const sortedBy = (attr: 'weight' | 'height', at: 'dec' | 'inc') => {
    const arr: any = [...pokemonsArray];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (at === 'inc') {
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
      <PaginatorComponent {...props} setloader={setLoader}/>
      <div className={style.filter__block}>
        <input type="text" className={style.search__input} onChange={(event) => setValue(event.target.value)} />
        <div onClick={() => setOpenFilters(true)}>Filters</div>
        <Drawer open={openFilters} anchor='right'>
          <div onClick={() => setOpenFilters(false)}>Close</div>
          <div className={style.filter}> <button className={style.sorted__btn} onClick={() => sortedBy('weight', 'dec')}>weigth</button></div>
          <div className={style.filter}> <button className={style.sorted__btn} onClick={() => sortedBy('height', 'inc')}>height</button></div>
          <div className={style.filter}>
            Abilities
            <div>
              <div className={style.filter__name__wrapper}><div><input type="radio" name='abilitie' /></div><div>overgrow</div></div>
              <div className={style.filter__name__wrapper}><div><input type="radio" name='abilitie' /></div><div>blaze</div></div>
              <div className={style.filter__name__wrapper}><div><input type="radio" name='abilitie' /></div><div>torrent</div></div>
              <div className={style.filter__name__wrapper}><div><input type="radio" name='abilitie' /></div><div>shield-dust</div></div>
              <div className={style.filter__name__wrapper}><div><input type="radio" name='abilitie' /></div><div>compound-eyes</div></div>
              <div className={style.filter__name__wrapper}><div><input type="radio" name='abilitie' /></div><div>shed-skin</div></div>
              <div className={style.filter__name__wrapper}><div><input type="radio" name='abilitie' /></div><div>keen-eye</div></div>
              <div className={style.filter__name__wrapper}><div><input type="radio" name='abilitie' /></div><div>run-away</div></div>
              <div className={style.filter__name__wrapper}><div><input type="radio" name='abilitie' /></div><div>sweet-veil</div></div>
              <div className={style.filter__name__wrapper}><div><input type="radio" name='abilitie' /></div><div>as-one</div></div>
              <div className={style.filter__name__wrapper}><div><input type="radio" name='abilitie' /></div><div>inner-focus</div></div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>

    <div className={style.card__wrapper}>
      {filterPokemons.map((pok: any) => { return <Pokemon key={pok.name} data={pok} /> })}
    </div>
  </div>
})
export default Pokemons;