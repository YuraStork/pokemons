import style from './footer.module.css';

const Footer: React.FC = () => {
  return <footer className={style.footer}>
    <div className={style.wrapper}>
      <div>Розробив студент</div>
      <div>Усі права захищені:)</div>
      </div>
  </footer>
}
export default Footer;