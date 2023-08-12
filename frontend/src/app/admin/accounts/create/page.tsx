import AccountForm from '@/components/Forms/Accounts/AccountForm';
import style from './page.module.css';

export default function CreateAccountPage() {
  return (
    <div>
      <h1 className={style.title}>Создание профиля</h1>
      <AccountForm />
    </div>
  );
}
