import style from './page.module.css';

export default function Page({ params }: { params: { learnerId: string, taskId: string } }) {
    return (
        <div>
            <h1 className={style.title}> Оценка </h1>
            <button className={style.buttonRedux}> Редактировать оценку </button>
            <h1 className = {style.value}>Оценка: <a className={style.bigValue}> 5 </a></h1>
            <div className={style.param}>
                <h1 className = {style.paramName}>ТИП</h1>
                <h1 className={style.smallValue}> Оц. в ведомость </h1>
            </div>
            <div className={style.param}>
                <h1 className = {style.paramName}>Ученик</h1>
                <h1 className={style.smallValue}> Иванов Иван Иванович </h1>
            </div>
            <div className={style.param}>
                <h1 className = {style.paramName}>Задание</h1>
                <h1 className={style.smallValue}> ссылка на дз </h1>
            </div>
            <div className={style.param}>
                <h1 className = {style.paramName}>Комментарий</h1>
                <h1 className={style.smallValue}> какой-то коммент </h1>
            </div>
            <div className={style.param}>
                <h1 className = {style.paramName}>Дата выставления</h1>
                <h1 className={style.smallValue}> 23.07.2003 </h1>
            </div>
            <button className={style.deleteButton}> Удалить оценку </button>
        </div>
  );
}