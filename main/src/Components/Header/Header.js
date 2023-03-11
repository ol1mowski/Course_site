import SearchBar from "./SearchBar/SearchBark";
import styles from './Header.module.css';

function Header() {
    return(
        <div className={styles.container}>
            <SearchBar />
        </div>
    )
}

export default Header;