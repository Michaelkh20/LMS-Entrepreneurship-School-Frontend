import { Jura } from 'next/font/google';
import AccountForm from '../../../../../components/Forms/Accounts/AccountForm';
import styles from './page.module.css';

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
      <h1 className={`${styles.title} ${jura.className}`}>
        РЕДАКТИРОВАНИЕ ПРОФИЛЯ
      </h1>
      <AccountForm isEdit={true} />
    </div>
  );
};

export default RegistrationPage;
