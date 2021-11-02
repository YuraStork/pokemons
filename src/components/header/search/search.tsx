import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Redirect } from 'react-router';
import style from './search.module.css'

const SearchComponent: React.FC = () => {
  const [value, setValue] = React.useState<string>('');
  const [redirect, setRedirect] = React.useState<any>(false);

  React.useEffect(() => {
    return () => {
      setRedirect(false)
      setValue('');
    }
  }, [redirect])
  const keyPressFunction = (event: any) => {
    console.log('KEY')
    if (event.key == 'Enter') {
      setRedirect(true);
    }
  }

  if (redirect) return (
    <div><Redirect to={`/pokemons/${value}`} />
      <div className={style.search__block}>
        <div>
          <input type="text" className={style.search__input} onChange={(event) => setValue(event.target.value)} value={value} onKeyPress={keyPressFunction} placeholder='id or name' />
        </div>
      </div>
    </div>)
  else return <div className={style.search__block}>
    <div><input type="text" className={style.search__input} onChange={(event) => setValue(event.target.value)} value={value} onKeyPress={keyPressFunction} placeholder='id or name'/></div>
  </div>
}
export default SearchComponent;