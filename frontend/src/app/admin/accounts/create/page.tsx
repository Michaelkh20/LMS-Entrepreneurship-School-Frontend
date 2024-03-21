import styles from './page.module.css';
import CreateAccountForm from '@/components/Forms/Accounts/Create';

export default function CreateAccountPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Создать аккаунт</h1>
      <CreateAccountForm />
    </div>
  );
}
