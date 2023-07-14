import BackButton from '../../BackButton/back-button';
import PersonIcon from '../../Icons/person-icon';
import ExitButton from './ExitButton/exit-button';
import styles from './header.module.css';

export default function HeaderAdminBig() {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <span className={styles.adminIcon}><PersonIcon/></span>
                <span className={styles.adminLabel}>Администратор</span>
            </div>
            <div className={styles.right}>
                <BackButton/>
                <ExitButton/>
            </div>
        </nav>
    )
}