import React from 'react';
import styles from './page.module.css';

const AdminPage: React.FC = () => {

    const rectangles = [
        {text: 'Аккаунты', link: '/accounts'},
        {text: 'Команды', link: '/teams'},
        {text: 'Оценки', link: '/grades'},
        {text: 'Заявки', link: '/applications'},
        {text: 'Транзакции', link: '/transactions'},
        {text: 'Лоты', link: '/lots'},
        {text: 'Темы', link: '/topics'},
        {text: 'Задания', link: '/tasks'},
        {text: 'Посещаемость', link: '/attendance'},
        {text: 'Сданные файлы', link: '/submitted-files'},
        {text: 'Редактировать формулу оценивания', link: '/edit-grading-formula'},
    ];

    return (
        <>
            <div className={styles.buttonRow}>
                <button className={styles.button}>Создать рассылку</button>
            </div>

            <div className={styles.card_wrapper}>
                {rectangles.map((rectangle, index) => (
                    <div className={styles.card}
                         key={index}>
                        <p>{rectangle.text}</p>
                    </div>
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