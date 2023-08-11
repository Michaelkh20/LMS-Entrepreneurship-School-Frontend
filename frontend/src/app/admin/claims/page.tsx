import styles from './page.module.css';
import Link from 'next/link';

export default function Page() {
  const rectangles = [
    { text: 'Купля-продажа лотов', link: '/admin/accounts', notifications: 5 }, // Добавлено поле notifications
    { text: 'Просроченный дедлайн', link: '/teams' },
    { text: 'Размещение лотов', link: '/grades' },
    { text: 'Перевод шпрот', link: '/applications' },
  ];
  return (
    <div>
      <h1 className={styles.title}> Заявки </h1>

      <div className={styles.card_wrapper}>
        {rectangles.map((rectangle, index) => (
          <Link
            href={rectangle.link}
            key={index}
            className={`${styles.card} ${
              rectangle.notifications ? styles.card__notification : ''
            }`}
            data-count={rectangle.notifications}
          >
            <p>{rectangle.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
