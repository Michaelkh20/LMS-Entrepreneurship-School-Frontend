import { Jura } from 'next/font/google';
import style from './page.module.css';
import AccountForm from '@/components/Forms/Accounts/AccountForm';

const jura = Jura({
  subsets: ['cyrillic'],
});

export default function CreateAccountPage() {
  return (
    <div>
      <h1 className={`${style.title} ${jura.className}`}>СОЗДАНИЕ ПРОФИЛЯ</h1>
      <AccountForm />
    </div>
  );
}
