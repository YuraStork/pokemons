import { Drawer } from '@mui/material';
import axios from 'axios';
import React from 'react';
import Preloader from '../preloader/preloader';
import AbilitiesComponent from './abilities/abilities';
import PaginatorComponent from './paginator/paginator';
import Pokemon from './pokemon/pokemon';
import style from './pokemons.module.css';

const Pokemons: React.FC<any> = React.memo((props) => {
  const [defaultArray, setDefaultArray] = React.useState<any>([]);
  const [pokemonsArray, setPokemons] = React.useState<any>(null);

  const [openFilters, setOpenFilters] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [loader, setLoader] = React.useState(false);

  const [cancel, setCancel] = React.useState(false);
  const [Checked, setChecked] = React.useState<any>([]);

  const filters = [
    {
      id: 1,
      name: 'overgrow'
    },
    {
      id: 2,
      name: 'chlorophyll'
    },
    {
      id: 3,
      name: 'blaze'
    },
    {
      id: 4,
      name: 'torrent'
    },
    {
      id: 5,
      name: 'shield-dust'
    },
    {
      id: 6,
      name: 'compound-eyes'
    },
    {
      id: 7,
      name: 'shed-skin'
    },
    {
      id: 8,
      name: 'keen-eye'
    },
    {
      id: 9,
      name: 'run-away'
    },
    {
      id: 10,
      name: 'sweet-veil'
    },
    {
      id: 11,
      name: 'as-one'
    },
    {
      id: 12,
      name: 'inner-focus'
    },
  ]
  React.useEffect(() => {
    console.log('/////////////////1/////////////////////////');
    const Fetch = async () => {
      const arrPagesL: any = [];
      if (props.pokemons) {
        props.pokemons.map((pok: any) => {
          arrPagesL.push(axios.get(pok.url).then((pok: any) => pok.data))
        })
        const promiseArr = await Promise.all(arrPagesL);
        setPokemons(promiseArr);
        setDefaultArray(promiseArr);
      }
      else {
        setPokemons([]);
      }
      setChecked([]);
    }
    Fetch();
    setCancel(false);
  }, [props, cancel])
  React.useEffect(() => {
    setPokemons(defaultArray);
    Checked.map((id: any) => {
      for (let f of filters) {
        if (Number(id) == Number(f.id)) {
          sortedByAbilities(f.name);
        }
      }
    })
  }, [Checked])

  if (!pokemonsArray) return <div><Preloader /></div>
  const sortedBy = (attr: 'weight' | 'height', at: 'dec' | 'inc') => {
    setLoader(true);
    setTimeout(() => {
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
      setLoader(false);
    }, 500);
 
  }
  const sortedByAbilities = (ability: string) => {
    setLoader(true);
    setTimeout(() => {
      let arr: any = [];
      defaultArray.filter((pok: any) => {
        return pok.abilities.forEach((ab: any, index: number) => {
          if (ab.ability.name == ability) {
            arr.push(pok);
            return true;
          }
          else {
            return false
          }
        })
      })
      setPokemons(arr);
      setLoader(false);
    }, 500)

  }
  const filterPokemons = pokemonsArray.filter((pokemon: any) => {
    return pokemon.name.toLowerCase().includes(value.toLowerCase());
  });
  return <div className={style.pokemons}>
    <div className={style.navigation}>
      <PaginatorComponent {...props} setloader={setLoader} />
      <div className={style.filter__block}>
        <input type="text" className={style.search__input} onChange={(event) => setValue(event.target.value)} />
        <div onClick={() => setOpenFilters(true)}>Filters</div>

        <Drawer open={openFilters} onClose={() => setOpenFilters(false)} anchor='right'>
          <div onClick={() => setOpenFilters(false)}>Close</div>
          <div className={style.filter}> <button className={style.sorted__btn} onClick={() => sortedBy('weight', 'dec')}>weigth</button></div>
          <div className={style.filter}> <button className={style.sorted__btn} onClick={() => sortedBy('height', 'inc')}>height</button></div>

          <div className={style.filter}>
            <AbilitiesComponent sorted={sortedByAbilities} cancel={setCancel} Checked={Checked} setChecked={setChecked} filters={filters} />
          </div>

        </Drawer>
      </div>
    </div>

    {loader ? <div><Preloader /></div> :
      <div className={style.card__wrapper}>
        {filterPokemons.map((pok: any) => { return <Pokemon key={pok.name} data={pok} /> })}
      </div>
    }

  </div>
})
export default Pokemons;