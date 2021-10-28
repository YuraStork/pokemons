import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import style from './header.module.css'
import SearchComponent from './search/search';
import DrawerComponent from './drawer/drawer';

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

              <div className={style.navlinks__wrapper}>
                <div className={style.navlinks__block}>
                  <NavLink className={style.navlink} activeClassName={style.active__navlink} to='/home'>Home</NavLink>
                  <NavLink className={style.navlink} activeClassName={style.active__navlink} to='/pokemons'>Pokemons</NavLink>
                </div>
                <SearchComponent />
              </div>
            </Toolbar>

            <DrawerComponent open={open} setOpen={setOpen} />
          </div>
        </div>
      </AppBar>
    </Box>
  )
}
export default Header;