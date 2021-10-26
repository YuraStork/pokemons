import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import React from 'react';
import styles from './modal.module.css';
import pokemonsContainer from '../pokemonsContainer';

const TransitionsModal: React.FC<any> = (pokemon) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: 'maxContent',
    border: '2px solid #000',
    boxShadow: 24,
    p: 5,
  };

  return (
    <div>
      <Button variant='contained' color='secondary' style={{ marginTop: '10px' }} onClick={handleOpen}>Детальніше</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} >
          <Box sx={style} className={styles.backfon}>
            <div className={styles.wrapper}>
              <div className={styles.image__block}>
                <img src={pokemon.sprites.other.dream_world.front_default
                  ? pokemon.sprites.other.dream_world.front_default
                  : (pokemon.sprites.other['official-artwork']['front_default']
                    ? pokemon.sprites.other['official-artwork']['front_default'] : pokemon.sprites.other.home.front_default)} className={styles.image} alt="" />
              </div>

              <div className={styles.defines__block}>
                <div className={styles.defines}>
                  <div>Name: {pokemon.name.toUpperCase()}</div>
                  <div className={styles.id__block}>id: #{pokemon.id < 10 ? '00' : null}{pokemon.id > 9 && pokemon.id < 100 ? '0' : null}{pokemon.id}</div>
                  <div>Weight: {pokemon.weight}</div>
                  <div>Height: {pokemon.height}</div>
                </div>

                <div className={styles.abbilities__block}>Abilities
                  {pokemon.abilities.map((ab: any, index: any) => {
                    return <div key={index}>{++index}.{ab.ability.name}</div>
                  })}
                </div>


              </div>
              <div className={styles.icons}>
                <div className={styles.titleIcons}>Sprites</div>
                {pokemon.sprites.back_default ? <img src={pokemon.sprites.back_default} alt="" /> : null}
                {pokemon.sprites.back_female ? <img src={pokemon.sprites.back_female} alt="" /> : null}
                {pokemon.sprites.back_shiny ? <img src={pokemon.sprites.back_shiny} alt="" /> : null}
                {pokemon.sprites.back_shiny_female ? <img src={pokemon.sprites.back_shiny_female} alt="" /> : null}
                {pokemon.sprites.front_default ? <img src={pokemon.sprites.front_default} alt="" /> : null}
                {pokemon.sprites.front_female ? <img src={pokemon.sprites.front_female} alt="" /> : null}
                {pokemon.sprites.front_shiny ? <img src={pokemon.sprites.front_shiny} alt="" /> : null}
                {pokemon.sprites.front_shiny_female ? <img src={pokemon.sprites.front_shiny_female} alt="" /> : null}
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default TransitionsModal
