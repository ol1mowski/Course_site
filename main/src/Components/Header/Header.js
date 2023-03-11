import SearchBar from "./SearchBar/SearchBark";
import styles from './Header.module.css';

function Header() {
    return(
        <div className={styles.container}>
            <h1 className={styles.h1}>Kursy OT-Groupe</h1>
            <SearchBar />
        </div>
    )
}

export default Header;