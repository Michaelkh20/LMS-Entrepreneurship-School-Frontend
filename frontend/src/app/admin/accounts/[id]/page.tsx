import HeaderAdminBig from "@/components/headers/header-admin-big/header";
import style from './page.module.css';
import Table from "./table";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <div>
            <HeaderAdminBig />
            <h1 className={style.title}> Профиль </h1>
            <div>ID IS: {params.id}</div>
            <div className={style.row}>
                <div className={style.left}>
                    <h1 className={style.name}>Имя Студента из API</h1>
                    <h1 className={style.role}> РОЛЬ из API </h1>
                </div>
                <div className={style.balance}>
                    Баланс: 777
                </div>
            </div>
            <div className={style.line}>
                Email: <h1 className={style.role}> mail </h1>
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
            <div className={style.buttonContainer}>
                <button className={style.buttonRedux}> Редактировать </button>
                <button className={style.deleteButton}> Удалить </button>
            </div>
            <h1 className={style.underlineText}>
                Итоговая оценка
            </h1>
            <Table/>
            <button className={style.buttonUp}> Повысить итоговую </button>
        </div>

    )
}