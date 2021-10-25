import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import style from './header.module.css'
import { Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Header: React.FC = () => {
  const [open, setOpen] = React.useState<true | false>(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <div className={style.wrapper}>
          <div className={style.container}>
            <Toolbar variant="dense" disableGutters className={style.header}>
              <div className={style.burger__menu}>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => { setOpen(true) }}>
                  <MenuIcon />
                </IconButton></div>
              <div className={style.logo__block}>

                <Typography variant="h6" color="inherit" component="div">
                  Pokemons
                </Typography>
              </div>
              <div className={style.navlinks__block}>
                <NavLink className={style.navlink} activeClassName={style.active__navlink} to='/main'>Home</NavLink>
                <NavLink className={style.navlink} activeClassName={style.active__navlink} to='/pokemons'>Pokemons</NavLink>
              </div>
            </Toolbar>
            <Drawer open={open} className={style.drawer}>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
              <NavLink className={style.navlink__mob} activeClassName={style.active__navlink} to='/main'>Home</NavLink>
              <NavLink className={style.navlink__mob} activeClassName={style.active__navlink} to='/pokemons'>Pokemons</NavLink>
            </Drawer>
          </div>
        </div>
      </AppBar>
    </Box>
  )
}
export default Header;