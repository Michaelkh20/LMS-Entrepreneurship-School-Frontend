'use client';
import styles from './page.module.css';
import TableComponent from '../../../../components/TableOfMark/TableOfMark';
import Link from 'next/link';
import { Jura } from 'next/font/google';
import { useGetAccountByIdQuery } from '@/redux/services/adminApi';
import { roleTranslate } from '@/types/common';
import LoadingErrorWrapper from '@/components/LoadingErrorWrapper/LoadingErrorWrapper';
import AccountDeleteBtn from '@/components/Buttons/DeleteButtons/AccountDeleteBtn/AccountDeleteBtn';

const jura = Jura({
  subsets: ['cyrillic'],
});

export default function Page({ params: { id } }: { params: { id: number } }) {
  // const data = [
  //   {
  //     key: '1',
  //     elementControl: 'Элемент 1',
  //     testing: '20%',
  //     homework: '40%',
  //     contests: '10%',
  //     exam: '20%',
  //     attendance: '10%',
  //     bonus: '5',
  //     total: '100',
  //   },
  //   {
  //     key: '2',
  //     elementControl: 'Элемент 2',
  //     testing: '15%',
  //     homework: '50%',
  //     contests: '5%',
  //     exam: '15%',
  //     attendance: '15%',
  //     bonus: '10',
  //     total: '110',
  //   },
  //   // Добавьте остальные данные
  // ];
  const { data, isLoading, isError } = useGetAccountByIdQuery(id);

  return (
    <LoadingErrorWrapper isLoading={isLoading} isError={isError}>
      <h1 className={`${styles.title} ${jura.className}`}>ПРОФИЛЬ</h1>
      <div className={styles.row}>
        <div className={styles.left}>
          <h1 className={styles.name}>
            {data?.surname + ' ' + data?.name + ' ' + data?.middleName}
          </h1>
        </div>
        <p className={styles.balance}>
          Баланс:
          <span className={styles.balance_value}>{data?.balance} ШП</span>
        </p>
      </div>
      <p className={styles.role}>{roleTranslate(data?.role)}</p>
      <Link href={`/admin/accounts/${id}/edit`} className={styles.buttonRedux}>
        Редактировать
      </Link>
      <div className={styles.learner_data}>
        <div className={styles.learner_props}>
          <p className={styles.prop}>Email:</p>
          <p className={styles.prop}>Телефон:</p>
          <p className={styles.prop}>Мессенджер:</p>
          <p className={styles.prop}>Команда:</p>
        </div>
        <div className={styles.learner_props}>
          <p className={styles.prop_value}>{data?.email}</p>
          <p className={styles.prop_value}>{'+7' + data?.phone}</p>
          <p className={styles.prop_value}>{data?.messenger}</p>
          <p className={styles.prop_value}>
            {data?.teamNumber.length !== 0
              ? data?.teamNumber.map((teamNumber) => (
                  <Link key={teamNumber} href={`/admin/teams/${teamNumber}`}>
                    №{data?.teamNumber}
                  </Link>
                ))
              : 'Нет команды'}
          </p>
        </div>
      </div>
      <div className={styles.deleteBtnContainer}>
        <AccountDeleteBtn id={id} />
      </div>
      <h1 className={styles.final_grade_label}>Итоговая оценка</h1>
      {/* <TableComponent data={data} /> */}
      <button className={styles.buttonUp}> Повысить итоговую </button>
    </LoadingErrorWrapper>
  );
}
