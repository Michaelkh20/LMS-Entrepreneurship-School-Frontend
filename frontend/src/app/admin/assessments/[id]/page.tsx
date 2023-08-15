import { Jura } from 'next/font/google';
import styles from './page.module.css';
import Link from 'next/link';
import Prop from '@/components/EntityProps/Prop';

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
        <p className={styles.grade_value} data-grade={8}>
          8
        </p>
      </div>

      <Prop.Container className={styles.grade_props}>
        <Prop label="Тип" value="Оц. в ведомость" />
        <Prop label="Ученик" value="Иванов Иван Иванович" />
        <Prop
          label="Задание"
          value={(className) => (
            <Link className={className} href={''}>
              Ссылка_на_ДЗ
            </Link>
          )}
        />
        <Prop label="Комментарий" value="какой-то комментарий" />
        <Prop label="Дата выставления" value="08.07.2023" />
      </Prop.Container>

      <button className={styles.delete_button}> Удалить оценку </button>
    </div>
  );
}
