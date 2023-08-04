import NavBarAdmin from '@/components/headers/header-admin/header';
import style from './page.module.css';
import AccountForm from '@/components/Forms/Accounts/AccountForm';

const RegistrationPage: React.FC = () => {
  const handleFormSubmit = (values: any) => {
    // логика для обработки данных из формы
    console.log(values);
  };

  return (
    <div>
      <h1 className={style.title}> Создание профиля </h1>
      <AccountForm isEdit={false} />
    </div>
  );
};

export default RegistrationPage;
