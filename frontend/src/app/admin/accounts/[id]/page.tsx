import styles from './page.module.css';
import TableComponent from '../../../../components/TableOfMark/TableOfMark';
import Link from 'next/link';
import { Jura } from 'next/font/google';

const jura = Jura({
  subsets: ['cyrillic'],
});

export default function Page({ params }: { params: { id: string } }) {
  const data = [
    {
      key: '1',
      elementControl: 'Элемент 1',
      testing: '20%',
      homework: '40%',
      contests: '10%',
      exam: '20%',
      attendance: '10%',
      bonus: '5',
      total: '100',
    },
    {
      key: '2',
      elementControl: 'Элемент 2',
      testing: '15%',
      homework: '50%',
      contests: '5%',
      exam: '15%',
      attendance: '15%',
      bonus: '10',
      total: '110',
    },
    // Добавьте остальные данные
  ];
  return (
    <div>
      <h1 className={`${styles.title} ${jura.className}`}>ПРОФИЛЬ</h1>
      <div>ID IS: {params.id}</div>
      <div className={styles.row}>
        <div className={styles.left}>
          <h1 className={styles.name}>Имя Студента из API</h1>
        </div>
        <p className={styles.balance}>
          Баланс: <span className={styles.balance_value}>777 ШП</span>
        </p>
      </div>
      <h1 className={styles.role}> РОЛЬ из API </h1>
      <button className={styles.buttonRedux}> Редактировать</button>
      <div className={styles.learner_data}>
        <div className={styles.learner_props}>
          <p className={styles.prop}>Email:</p>
          <p className={styles.prop}>Телефон:</p>
          <p className={styles.prop}>Мессенджер:</p>
          <p className={styles.prop}>Команда:</p>
        </div>
        <div className={styles.learner_props}>
          <p className={styles.prop_value}>iiivanov@edu.hse.ru</p>
          <p className={styles.prop_value}>iPhone</p>
          <p className={styles.prop_value}>tg:@ivan</p>
          <p className={styles.prop_value}>№1</p>
        </div>
      </div>
      <button className={styles.delete_button}>Удалить</button>
      <h1 className={styles.final_grade_label}>Итоговая оценка</h1>
      <TableComponent data={data} />
      <button className={styles.buttonUp}> Повысить итоговую </button>
    </div>
  );
}
