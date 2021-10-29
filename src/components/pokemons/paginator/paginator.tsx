import React from 'react';
import Preloader from '../../preloader/preloader';
import style from '../pokemons.module.css';

const PaginatorComponent: React.FC<any> = (props) => {
  const pagesCount = Math.ceil(props.count / props.maxCards);
  const pages: any = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const portionCounter = Math.ceil(pagesCount / (props.portionNumber));
  const [portionNumber, setPortionNumber] = React.useState(1);
  const leftPortionNumber = (portionNumber - 1) * (props.portionNumber) + 1;
  const rightPortionNumber = portionNumber * (props.portionNumber);

  const portionCounter__medium = Math.ceil(pagesCount / (props.portionNumber - 5));
  const [portionNumber__medium, setPortionNumber__medium] = React.useState(1);
  const leftPortionNumber__medium = (portionNumber__medium - 1) * (props.portionNumber - 5) + 1;
  const rightPortionNumber__medium = portionNumber__medium * (props.portionNumber - 5);

  const portionCounter__adaptive = Math.ceil(pagesCount / (props.portionNumber - 8));
  const [portionNumber__adaptive, setPortionNumber__adaptive] = React.useState(1);
  const leftPortionNumber__adaptive = (portionNumber__adaptive - 1) * (props.portionNumber - 8) + 1;
  const rightPortionNumber__adaptive = portionNumber__adaptive * (props.portionNumber - 8);

  return (
    <div>
      <div className={style.paginator}>
        <button className={style.btn_prev} disabled={portionNumber == 1} onClick={() => { props.withPrev(); setPortionNumber(portionNumber - 1) }}>&#60;</button>
        <span className={props.currentPage == 1 ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, 0, 1, props.maxCards); setPortionNumber(1); props.setPage(1) }}>1</span>
        {portionNumber > 1 ? <span>...</span> : null}
        {
          pages.filter((p: any) => p >= leftPortionNumber && p <= rightPortionNumber)
            .map((p: any, index: number) => {
              if (p == pages.length) {
                return null
              }
              else if (p == 1) {
                return null
              }
              else {
                return <span key={p} className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, p - 1, p, props.maxCards); props.setPage(p) }}>{p}</span>
              }
            }
            )
        }
        {portionNumber <= portionCounter - 1 ? <span>...</span> : null}
        <span className={props.currentPage == pages.length ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, pages.length - 1, pages.length, props.maxCards); setPortionNumber(portionCounter); props.setPage(pages.length) }}>{pages.length}</span>
        <button className={style.next_btn} disabled={portionNumber == portionCounter} onClick={() => { props.withNext(); setPortionNumber(portionNumber + 1) }}>&#62;</button>

        <select className={style.select__btn} defaultValue={props.maxCards} onChange={(event) => { props.withSetMaxCards(+event.target.value); }}>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
        </select>
      </div>

      <div className={style.paginator__medium}>
        <button className={style.btn_prev} disabled={portionNumber__medium == 1} onClick={() => { props.withPrev(); setPortionNumber__medium(portionNumber__medium - 1) }}>&#60;</button>

        <span className={props.currentPage == 1 ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, 0, 1, props.maxCards); setPortionNumber__medium(1) }}>1</span>
        {portionNumber__medium > 1 ? <span>...</span> : null}
        {
          pages.filter((p: any) => p >= leftPortionNumber__medium && p <= rightPortionNumber__medium)
            .map((p: any, index: number) => {
              if (p == pages.length) {
                return null
              }
              else if (p == 1) {
                return null
              }
              else {
                return <span key={p} className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, p - 1, p, props.maxCards); }}>{p}</span>
              }
            }
            )
        }
        {portionNumber__medium <= portionCounter__medium - 1 ? <span>...</span> : null}
        <span className={props.currentPage == pages.length ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, pages.length - 1, pages.length, props.maxCards); setPortionNumber__medium(portionCounter__medium) }}>{pages.length}</span>
        <button className={style.next_btn} disabled={portionNumber__medium == portionCounter__medium} onClick={() => { props.withNext(); setPortionNumber__medium(portionNumber__medium + 1); }}>&#62;</button>

        <select className={style.select__btn} defaultValue={props.maxCards} onChange={(event) => { props.withSetMaxCards(+event.target.value); }}>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
        </select>
      </div>

      <div className={style.paginator__adaptive}>
        <button className={style.btn_prev} disabled={portionNumber__adaptive == 1} onClick={() => { props.withPrev(); setPortionNumber__adaptive(portionNumber__adaptive - 1) }}>&#60;</button>

        <span className={props.currentPage == 1 ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, 0, 1, props.maxCards); setPortionNumber__adaptive(1) }}>1</span>
        {portionNumber__adaptive > 1 ? <span>...</span> : null}
        {
          pages.filter((p: any) => p >= leftPortionNumber__adaptive && p <= rightPortionNumber__adaptive)
            .map((p: any, index: number) => {
              if (p == pages.length) {
                return null
              }
              else if (p == 1) {
                return null
              }
              else {
                return <span key={p} className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, p - 1, p, props.maxCards); }}>{p}</span>
              }
            }
            )
        }
        {portionNumber__adaptive <= portionCounter__adaptive - 1 ? <span>...</span> : null}
        <span className={props.currentPage == pages.length ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, pages.length - 1, pages.length, props.maxCards); setPortionNumber__adaptive(portionCounter__adaptive) }}>{pages.length}</span>
        <button className={style.next_btn} disabled={portionNumber__adaptive == portionCounter__adaptive} onClick={() => { props.withNext(); setPortionNumber__adaptive(portionNumber__adaptive + 1); }}>&#62;</button>

        <select className={style.select__btn} defaultValue={props.maxCards} onChange={(event) => { props.withSetMaxCards(+event.target.value); }}>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
        </select>
      </div>
    </div >)
}
export default PaginatorComponent;