import style from './page.module.css';
import TableComponent from '../../../../components/TableOfMark/TableOfMark';

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
            <h1 className={style.title}> Профиль </h1>
            <div>ID IS: {params.id}</div>
            <div className={style.row}>
                <div className={style.left}>
                    <h1 className={style.name}>Имя Студента из API</h1>
                    <h1 className={style.role}> РОЛЬ из API </h1>
                    <button className={style.buttonRedux}> Редактировать</button>
                </div>
                <div className={style.balance}>
                    Баланс: 777
                </div>
            </div>
            <div className={style.line}>
                Email <h1 className={style.role}> mail </h1>
            </div>
            <div className={style.line}>
                Email <h1 className={style.role}> mail </h1>
            </div>
            <div className={style.line}>
                Email <h1 className={style.role}> mail </h1>
            </div>
            <div className={style.line}>
                Email <h1 className={style.role}> mail </h1>
            </div>
            <div className={style.line}>
                Email <h1 className={style.role}> mail </h1>
            </div>
            <h1 className={style.underlineText}>
                Итоговая оценка
            </h1>
            <TableComponent data={data} />
            <button className={style.buttonUp}> Повысить итоговую </button>
        </div>

    )
}