import styles from './Menu.module.css';

function Menu() {
    return(
        <div className={styles.container}>
            <div className={styles.about}>O nas</div>
            <div className={styles.about}>Nasze oferty</div>
            <div className={styles.about}>O Twórcy kursów</div>
            <div className={styles.about}>Kontakt</div>
        </div>
    )
}

export default Menu;