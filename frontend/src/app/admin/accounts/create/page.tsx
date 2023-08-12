import { Jura } from 'next/font/google';
import styles from './page.module.css';
import AccountForm from '@/components/Forms/Accounts/AccountForm';

const jura = Jura({
  subsets: ['cyrillic'],
});

const RegistrationPage: React.FC = () => {
  const handleFormSubmit = (values: any) => {
    // логика для обработки данных из формы
    console.log(values);
  };

  return (
    <div>
      <h1 className={`${styles.title} ${jura.className}`}>СОЗДАНИЕ ПРОФИЛЯ</h1>
      <AccountForm isEdit={false} />
    </div>
  );
};

export default RegistrationPage;
