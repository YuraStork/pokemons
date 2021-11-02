import { Button, Drawer, IconButton } from '@mui/material';
import axios from 'axios';
import React from 'react';
import Preloader from '../preloader/preloader';
import AbilitiesComponent from './abilities/abilities';
import PaginatorComponent from './paginator/paginator';
import Pokemon from './pokemon/pokemon';
import style from './pokemons.module.css';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';

const Pokemons: React.FC<any> = React.memo((props) => {
  const Fetch = async () => {
    const arrPagesL: any = [];
    if (Checked.length == 0) {
      if (props.pokemons) {
        props.pokemons.map((pok: any) => {
          arrPagesL.push(axios.get(pok.url).then((pok: any) => pok.data))
        })
        const promiseArr = await Promise.all(arrPagesL);
        setPokemons(promiseArr);
        setDefaultArray(promiseArr);
        console.log('get');
        setTimeout(() => {
          console.log('time');
          setLoader(false);
        }, 1000)
      }
      else {
        setPokemons([]);
      }
    }
    else {
      if (props.pokemons) {
        props.pokemons.map((pok: any) => {
          arrPagesL.push(axios.get(pok.url).then((pok: any) => pok.data))
        })
        const promiseArr = await Promise.all(arrPagesL);
        console.log('get');
        setDefaultArray(promiseArr);
        Sort(promiseArr);
        setTimeout(() => {
          console.log('time');
          setLoader(false);
        }, 1000);
      }
      else {
        setPokemons([]);
      }
    }
  }
  const Sort = (defaultA: any = defaultArray) => {
    if (Checked.length > 0) {
      setLoader(true);
      const arrayPokemons: any = [];
      Checked.map((id: any) => {
        for (let f of filters) {
          if (Number(id) == Number(f.id)) {
            defaultA.forEach((pok: any) => {
              pok.abilities.forEach((ab: any, index: number) => {
                if (ab.ability.name == f.name) {
                  if (arrayPokemons.length > 0) {
                    let differ = false
                    for (let i = 0; i < arrayPokemons.length; i++) {
                      if (arrayPokemons[i].id == pok.id) {
                        differ = true;
                      }
                    }
                    if (!differ) {
                      arrayPokemons.push(pok)
                    }
                  }
                  else {
                    arrayPokemons.push(pok);
                  }
                }
              })
            });

            setTimeout(() => {
              setPokemons(arrayPokemons);
              setLoader(false);
            }, 500)
          }
        }
      });
    }
    else {
      setPokemons(defaultArray)
    }
  }

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
  ];

  React.useEffect(() => {
    setLoader(true);
    Fetch();
  }, [props, cancel])

  React.useEffect(() => {
    setLoader(true);
    Sort();
    setTimeout(() => {
      setLoader(false);
    }, 1000);
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
  const filterPokemons = pokemonsArray.filter((pokemon: any) => {
    return pokemon.name.toLowerCase().includes(value.toLowerCase());
  });

  const HandleChangeInput = (event: any) => {
    setLoader(true); setValue(event.target.value); setTimeout(() => {
      setLoader(false)
    }, 200)
  }
  const HandleOpen = ()=>{
    setOpenFilters(true)
  }
  const HandleClose = ()=>{
    setOpenFilters(false)
  }
  const HandleOpenFilters = ()=>{
    setOpenFilters(false)
  }
  
  return <div className={style.pokemons}>
    <div className={style.navigation}>
      <PaginatorComponent {...props} setloader={setLoader} />
      <div className={style.filter__block}>
        <input type="text" className={style.search__input} placeholder='name' onChange={(event) => HandleChangeInput(event)} />
        <Button size='small' variant='contained' color='primary' onClick={HandleOpen}><FilterListIcon /></Button>

        <Drawer open={openFilters} onClose={HandleClose} anchor='right'>
          <div onClick={HandleOpenFilters}><Button><CloseIcon /></Button></div>
          <div className={style.filter}> <button className={style.sorted__btn} onClick={() => sortedBy('weight', 'dec')}>weigth</button></div>
          <div className={style.filter}> <button className={style.sorted__btn} onClick={() => sortedBy('height', 'inc')}>height</button></div>

          <div className={style.filter}>
            <AbilitiesComponent cancel={setCancel} Checked={Checked} setChecked={setChecked} filters={filters} />
          </div>

        </Drawer>
      </div>
    </div>

    {loader ? <div><Preloader /></div>
      : <div className={style.card__wrapper}>
        {filterPokemons.length !== 0 ? filterPokemons.map((pok: any) => { return <Pokemon key={pok.name} data={pok} /> }) : <div className='not__found'>Not Found</div>}
      </div>
    }

  </div>
})
export default Pokemons;