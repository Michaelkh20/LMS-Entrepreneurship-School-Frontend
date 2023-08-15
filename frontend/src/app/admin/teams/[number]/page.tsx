import StudentTable from '@/components/StudentTable/table';
import styles from './page.module.css';
import TrackerTable from '@/components/TrackerTable/table';
import { Jura } from 'next/font/google';

const jura = Jura({
  subsets: ['cyrillic'],
});

export default function Page({ params }: { params: { number: string } }) {
  const studentsData = [
    {
      name: 'Иван',
      email: 'ivan@example.com',
      messenger: 'Telegram',
      balance: 100,
    },
    {
      name: 'Мария',
      email: 'maria@example.com',
      messenger: 'WhatsApp',
      balance: 150,
    },
    {
      name: 'Мария',
      email: 'maria@example.com',
      messenger: 'WhatsApp',
      balance: 150,
    },
    {
      name: 'Мария',
      email: 'maria@example.com',
      messenger: 'WhatsApp',
      balance: 150,
    },
    {
      name: 'Мария',
      email: 'maria@example.com',
      messenger: 'WhatsApp',
      balance: 150,
    },
    // Добавьте здесь другие данные об учениках
  ];

  const TrackerData = [
    { name: 'Иван', email: 'ivan@example.com', balance: 100 },
    { name: 'Мария', email: 'maria@example.com', balance: 150 },
    { name: 'Мария', email: 'maria@example.com', balance: 150 },
    // Добавьте здесь другие данные об учениках
  ];
  return (
    <div>
      <h1 className={`${styles.title} ${jura.className}`}>
        КОМАНДА №{params.number}
      </h1>
      <div className={styles.row}>
        <p className={styles.theme}>Тема: Тема из API</p>
        <button className={styles.buttonRedux}> Редактировать</button>
      </div>
      <div className={styles.sign}>Ученики</div>
      <StudentTable students={studentsData} />
      <div className={styles.sign}>Трекеры</div>
      <TrackerTable trackers={TrackerData} />
      <button className={styles.delete_button}> Удалить команду </button>
    </div>
  );
}
