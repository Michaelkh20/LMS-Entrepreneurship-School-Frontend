import styles from './page.module.css';
import EditAccountForm from '@/components/Forms/Accounts/Edit';

export default function EditAccountPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Редактирование аккаунта</h1>
      <EditAccountForm id={id} />
    </div>
  );
}
