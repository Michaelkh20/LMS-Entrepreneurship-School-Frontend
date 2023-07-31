import NavBarAdmin from '@/components/headers/header-admin/header';
import EditForm from '../../../../../components/AccountForm/form';
import style from './page.module.css';

const RegistrationPage: React.FC = () => {
  const handleFormSubmit = (values: any) => {
    // логика для обработки данных из формы
    console.log(values);
  };

  return (
    <div>
      <h1 className={style.title}> Редактирование профиля </h1>
      <EditForm isRegistrationForm={false} />
    </div>
  );
};

export default RegistrationPage;
