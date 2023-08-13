import { Jura } from 'next/font/google';
import styles from './page.module.css';
import Link from 'next/link';

const jura = Jura({
  subsets: ['cyrillic'],
});

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className={`${styles.title} ${jura.className}`}>ОЦЕНКА</h1>
      <div className={styles.redux_button_container}>
        <button className={styles.buttonRedux}>Редактировать</button>
      </div>
      <div className={styles.grade_container}>
        <p className={styles.grade}>Оценка: </p>
        <p className={styles.grade_value}>5</p>
      </div>

      <div className={styles.grade_props}>
        <div className={styles.grade_props_component}>
          <p className={styles.prop_type}>Тип</p>
          <p className={styles.prop_value}>Оц. в ведомость</p>
        </div>
        <div className={styles.grade_props_component}>
          <p className={styles.prop_type}>Ученик</p>
          <p className={styles.prop_value}>Иванов Иван Иванович</p>
        </div>
        <div className={styles.grade_props_component}>
          <p className={styles.prop_type}>Задание</p>
          <Link className={styles.prop_value} href={''}>
            Ссылка_на_ДЗ
          </Link>
        </div>
        <div className={styles.grade_props_component}>
          <p className={styles.prop_type}>Комментарий</p>
          <p className={styles.prop_value}>какой-то комментарий</p>
        </div>
        <div className={styles.grade_props_component}>
          <p className={styles.prop_type}>Дата выставления</p>
          <p className={styles.prop_value}>08.07.2023</p>
        </div>
      </div>

      <button className={styles.delete_button}> Удалить оценку </button>
    </div>
  );
}
