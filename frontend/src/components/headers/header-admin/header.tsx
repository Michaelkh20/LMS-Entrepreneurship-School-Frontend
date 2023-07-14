import AdminIcon from '../../Icons/person-icon';
import ExitButton from './ExitButton/exit-button';
import styles from './header.module.css';

export default function HeaderAdmin() {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <span className={styles.adminIcon}><AdminIcon/></span>
                <span className={styles.adminLabel}>Администратор</span>
            </div>
            <ExitButton/>
        </nav>
    )
}