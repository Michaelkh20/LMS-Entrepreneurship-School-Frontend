import AccountForm from '../../../../../components/Forms/Accounts/AccountForm';
import style from './page.module.css';

const RegistrationPage: React.FC = () => {
  const handleFormSubmit = (values: any) => {
    // логика для обработки данных из формы
    console.log(values);
  };

  return (
    <div>
      <h1 className={style.title}> Редактирование профиля </h1>
      <AccountForm isEdit={true} />
    </div>
  );
};

export default RegistrationPage;
