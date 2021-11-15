import React from 'react';
import style from './task.module.css';

const Task = () => {
  const [open, setOpen] = React.useState(false);
  const HandleOpen = () => setOpen(true);
  const HandleClose = () => setOpen(false);

  return <div className={style.modal__block}>

    <button onClick={HandleOpen}>Open</button>
    {open ? <div className={style.modal__content}>
      <div className={style.modal}> Modal <button onClick={HandleClose}>Close</button></div>
    </div> : null}
  </div>
}
export default Task;