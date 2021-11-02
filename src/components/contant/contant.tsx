import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Pokemon from "../pokemons/pokemon/pokemon";
import Preloader from "../preloader/preloader";
import style from './contant.module.css'

const Content: React.FC = (props: any) => {
  const [pokemons, setPokemons] = useState<any>(null);

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

  useEffect(() => {
    Fetch();
  }, [props])

  if (!pokemons) return <div><Preloader /></div>
  return <div className={style.contant}>
    <div className={style.card__wrapper}>
      {
        pokemons.map((i: any) => {
          return (
            <Pokemon key={i.name} data={i} />
          )
        })}

    </div>
    <div className={style.btn__block}>
     <NavLink to='/pokemons' className='navlink'> <Button variant='contained' color='secondary'>Дивитися всіх</Button></NavLink>
    </div>
  </div >
}
export default Content;