import { Jura } from 'next/font/google';
import style from './page.module.css';
import CreateAccountForm from '@/components/Forms/Accounts/CreateAccountForm';

const jura = Jura({
  subsets: ['cyrillic'],
});

export default function CreateAccountPage() {
  return (
    <>
      <h1 className={`${style.title} ${jura.className}`}>СОЗДАНИЕ ПРОФИЛЯ</h1>
      <CreateAccountForm />
    </>
  );
}
