import style from './drawer.module.css';
import { Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

const DrawerComponent: React.FC<any> = ({ open, setOpen }) => {
  const HandleOpen = () => {
    setOpen(false)
  }
  const HandleClose = () => {
    setOpen(false)
  }

  return (
    <Drawer open={open} className={style.drawer} onClose={HandleClose}>
      <IconButton onClick={HandleOpen}>
        <CloseIcon />
      </IconButton>
      <NavLink className={style.navlink__mob} activeClassName={style.active__navlink} to='/home'>Home</NavLink>
      <NavLink className={style.navlink__mob} activeClassName={style.active__navlink} to='/pokemons'>Pokemons</NavLink>
    </Drawer>
  )
}
export default DrawerComponent;