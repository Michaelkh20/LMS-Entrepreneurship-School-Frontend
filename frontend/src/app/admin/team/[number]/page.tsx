import StudentTable from '@/components/StudentTable/table';
import style from './page.module.css'
import TrackerTable from '@/components/TrackerTable/table';


export default function Page({ params }: { params: { number: string } }) {
    const studentsData = [
        { name: 'Иван', email: 'ivan@example.com', messenger: 'Telegram', balance: 100 },
        { name: 'Мария', email: 'maria@example.com', messenger: 'WhatsApp', balance: 150 },
        { name: 'Мария', email: 'maria@example.com', messenger: 'WhatsApp', balance: 150 },
        { name: 'Мария', email: 'maria@example.com', messenger: 'WhatsApp', balance: 150 },
        { name: 'Мария', email: 'maria@example.com', messenger: 'WhatsApp', balance: 150 },
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
            <h1 className={style.title}> Команда № { params.number } </h1>
            <div className={style.row}>
                <div className = {style.theme}>
                    Тема: Тема из API
                </div>
                <button className={style.buttonRedux}> Редактировать</button>
            </div>
            <div className={style.sign}>
                Ученики
            </div>
            <StudentTable students = {studentsData}/>
            <div className = {style.sign}>
                Трекеры
            </div>
            <TrackerTable trackers={TrackerData}/>
            <button className={style.buttonDelete}> Удалить команду </button>
        </div>
    )
}