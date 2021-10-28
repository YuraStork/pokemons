import style from './drawer.module.css';
import { Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

const DrawerComponent: React.FC<any> = ({ open, setOpen }) => {
  return (
    <Drawer open={open} className={style.drawer} onClose={()=>setOpen(false)}>
      <IconButton onClick={() => setOpen(false)}>
        <CloseIcon />
      </IconButton>
      <NavLink className={style.navlink__mob} activeClassName={style.active__navlink} to='/home'>Home</NavLink>
      <NavLink className={style.navlink__mob} activeClassName={style.active__navlink} to='/pokemons'>Pokemons</NavLink>
    </Drawer>
  )
}
export default DrawerComponent;