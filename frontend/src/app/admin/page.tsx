import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const AdminPage: React.FC = () => {
  const rectangles = [
    { text: 'Аккаунты', link: '/admin/accounts' },
    { text: 'Команды', link: '/admin/teams' },
    { text: 'Оценки', link: '/admin/assessments' },
    { text: 'Заявки', link: '/admin/applications' },
    { text: 'Транзакции', link: '/admin/transactions' },
    { text: 'Лоты', link: '/admin/lots' },
    { text: 'Темы', link: '/admin/lessons' },
    { text: 'Задания', link: '/admin/tasks' },
    { text: 'Посещаемость', link: '/admin/attendance' },
    { text: 'Сданные файлы', link: '/admin/submitted-files' },
    {
      text: 'Редактировать формулу оценивания',
      link: '/admin/edit-grading-formula',
    },
  ];

  return (
    <>
      <div className={styles.buttonRow}>
        <button className={styles.button}>Создать рассылку</button>
      </div>

      <div className={styles.card_wrapper}>
        {rectangles.map((rectangle, index) => (
          <Link href={rectangle.link} className={styles.card} key={index}>
            <p>{rectangle.text}</p>
          </Link>
        ))}
      </div>

      {/*<div className={styles.row}>
                {rectangles.slice(0, 4).map((rectangle, index) => (
                    <div
                        key={index}
                        className={styles.rectangle}
                    >
                        <p>{rectangle.text}</p>
                    </div>
                ))}
            </div>
            <div className={styles.row}>
                {rectangles.slice(4, 7).map((rectangle, index) => (
                    <div
                        key={index}
                        className={styles.rectangle}
                    >
                        <p>{rectangle.text}</p>
                    </div>
                ))}
            </div>
            <div className={styles.row}>
                {rectangles.slice(7, 10).map((rectangle, index) => (
                    <div
                        key={index}
                        className={styles.rectangle}
                    >
                        <p>{rectangle.text}</p>
                    </div>
                ))}
            </div>*/}
    </>
  );
};
export default AdminPage;
