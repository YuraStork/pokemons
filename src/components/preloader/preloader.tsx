import style from './preloader.module.css';
const Preloader: React.FC = () => {
  return <div className={style.wrapper}><div className={style.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
}
export default Preloader