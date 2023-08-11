import style from './page.module.css';
import CreateAccountForm from '@/components/Forms/Accounts/CreateAccountForm';

const RegistrationPage: React.FC = () => {
  const handleFormSubmit = (values: any) => {
    // логика для обработки данных из формы
    console.log(values);
  };

  return (
    <div>
      <h1 className={style.title}> Создание профиля </h1>
      <CreateAccountForm isEdit={false} />
    </div>
  );
};

export default RegistrationPage;
