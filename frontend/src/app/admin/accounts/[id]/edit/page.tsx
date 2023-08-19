import style from './page.module.css';
import { Jura } from 'next/font/google';
import EditAccountForm from '@/components/Forms/Accounts/EditAccountForm';

const jura = Jura({
  subsets: ['cyrillic'],
});

export default function EditAccountPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <>
      <h1 className={`${style.title} ${jura.className}`}>
        РЕДАКТИРОВАНИЕ ПРОФИЛЯ
      </h1>
      <EditAccountForm id={id} />
    </>
  );
}
