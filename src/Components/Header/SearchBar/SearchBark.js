import style from './SearchBar.module.css';

function SearchBar() {
    return(
        <div className={style.container}>
            <input className={style.input} type="text" placeholder="Wpisz nazwe kursu" />
            <button className={style.button}>Szukaj</button>
        </div>
    )
}

export default SearchBar;