import AccountForm from '@/components/Forms/Accounts/AccountForm';
import style from './page.module.css';

export default function EditAccountPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <div>
      <h1 className={style.title}> Редактирование профиля </h1>
      <AccountForm accountId={id} />
    </div>
  );
}
