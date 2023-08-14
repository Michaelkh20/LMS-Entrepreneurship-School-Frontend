import AccountForm from '@/components/Forms/Accounts/AccountForm';
import style from './page.module.css';
import { Jura } from 'next/font/google';

const jura = Jura({
  subsets: ['cyrillic'],
});

export default function EditAccountPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <div>
      <h1 className={`${style.title} ${jura.className}`}>
        РЕДАКТИРОВАНИЕ ПРОФИЛЯ
      </h1>
      <AccountForm accountId={id} />
    </div>
  );
}
