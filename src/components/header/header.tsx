import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import style from './header.module.css';

const Header: React.FC = () => {
  return <header className={style.header}>
    <div className={style.container}>
      <div className={style.logo__block}><img src={logo} alt='pokemon logo' title='our logo' className={style.logo__img} /></div>
      <div>
        <NavLink to='/home'>home</NavLink>
        <NavLink to='/pokemons'>   all pokemons</NavLink>
        <span> contacts</span>
      </div>
    </div>
  </header>
}
export default Header;