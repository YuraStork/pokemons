import React from 'react';
import Preloader from '../../preloader/preloader';
import style from '../pokemons.module.css';

const PaginatorComponent: React.FC<any> = (props) => {
  const [page, setPage] = React.useState(props.currentPage);
  const [portion, setPortion] = React.useState();
  console.log(page);
  const numberOfPages = Math.ceil(props.count / props.maxCards);
  const arrPages = [];
  for (let i = 1; i <= numberOfPages; i++) arrPages.push(i);
  return (
  <div>
    <div className={style.paginator}>
      <button className={style.btn_prev} disabled={page < 6} onClick={() => { props.withPrev(); setPage(page - 6) }}>&#60;</button>
      {arrPages.map((p: number, index) => {
        if (p == 1) {
          return (
            <span>
              <span key={p} className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, index, p, props.maxCards); setPage(1) }}>{p}</span>
              {page > 6 ? <span>...</span> : null}</span>)
        }
        else if (p > page - 1 && p <= page + 6) {
          return (
            <span key={p} className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, index, p, props.maxCards); }}>{p}</span>)
        }
        else if (p == arrPages.length - 3 && p < arrPages.length) {
          if (page > arrPages.length - 3) {
            return (
              <span key={p} className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, index, p, props.maxCards); }}>{p}</span>)
          }
        }
        else if (p == arrPages.length) {
          if (page == arrPages.length - 6) {
            return (
              <span key={p}><span className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, index, p, props.maxCards); setPage(arrPages.length - 3) }}>{p}</span></span>)
          }
          else
            return (
              <span key={p}><span>...</span><span className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, index, p, props.maxCards); setPage(arrPages.length - 3) }}>{p}</span></span>)
        }
      })}

      <button className={style.next_btn} disabled={page > arrPages.length - 7} onClick={() => { props.withNext(); setPage(page + 6) }}>&#62;</button>
      <select className={style.select__btn} defaultValue={props.maxCards} onChange={(event) => { props.withSetMaxCards(+event.target.value); setPage(1) }}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
      </select>
    </div>

    <div className={style.paginator__adaptive}>
      <button className={style.btn_prev} disabled={page < 3} onClick={() => { props.withPrev(); setPage(page - 3) }}>&#60;</button>
      {arrPages.map((p: number, index) => {
        if (p == 1) {
          return (
            <span>
              <span key={p} className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, index, p, props.maxCards); setPage(1) }}>{p}</span>
              {page > 3 ? <span>...</span> : null}</span>)
        }
        else if (p > page - 1 && p <= page + 3) {
          return (
            <span key={p} className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, index, p, props.maxCards); }}>{p}</span>)
        }
        else if (p == arrPages.length - 3 && p < arrPages.length) {
          if (page > arrPages.length - 3) {
            return (
              <span key={p} className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, index, p, props.maxCards); }}>{p}</span>)
          }
        }
        else if (p == arrPages.length) {
          if (page == arrPages.length - 3) {
            return (
              <span key={p}><span className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, index, p, props.maxCards); setPage(arrPages.length - 3) }}>{p}</span></span>)
          }
          else
            return (
              <span key={p}><span>...</span><span className={props.currentPage == p ? style.nav_activ_span : style.nav__span} onClick={() => { props.withGetPokemonsNavigation(props.maxCards, index, p, props.maxCards); setPage(arrPages.length - 3) }}>{p}</span></span>)
        }
      })}

      <button className={style.next_btn} disabled={page > arrPages.length - 4} onClick={() => { props.withNext(); setPage(page + 3) }}>&#62;</button>
      <select className={style.select__btn} defaultValue={props.maxCards} onChange={(event) => { props.withSetMaxCards(+event.target.value); setPage(1) }}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
      </select>
    </div>
  </div>)
}
export default PaginatorComponent;