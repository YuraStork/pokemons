import React from 'react';
import style from '../pokemons.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const AbilitiesComponent: React.FC<any> = (props) => {
  const handleToggle = ({ id, name }: any) => {
    const currentIndex = props.Checked.indexOf(id);
    const newChecked = [...props.Checked];
    if (currentIndex == -1) {
      newChecked.push(id);
    }
    else {
      newChecked.splice(currentIndex, 1);
    }
    props.setChecked(newChecked);
  }

  const handleCancel = () => {
    props.setChecked([]);
    props.cancel(true);
  }
  return <div>
    Abilities
    {
      props.filters.map((filter: any) => {
        return <div key={filter.id} className={style.filter__name__wrapper}><div>
          <input
            type="checkbox"
            name='abilitie'
            checked={props.Checked.indexOf(filter.id) == -1 ? false : true}
            onChange={() => {
              handleToggle(filter);
            }} /></div><div>{filter.name}</div></div>
      })
    }
    <div onClick={handleCancel}><Button><DeleteIcon />Очистити</Button></div>
  </div>
}
export default AbilitiesComponent