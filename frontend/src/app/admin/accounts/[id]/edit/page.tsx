import CreateAccountForm from '../../../../../components/Forms/Accounts/CreateAccountForm';
import style from './page.module.css';

const RegistrationPage: React.FC = () => {
  const handleFormSubmit = (values: any) => {
    // логика для обработки данных из формы
    console.log(values);
  };

  return (
    <div>
      <h1 className={style.title}> Редактирование профиля </h1>
      <CreateAccountForm isEdit={true} />
    </div>
  );
};

export default RegistrationPage;
