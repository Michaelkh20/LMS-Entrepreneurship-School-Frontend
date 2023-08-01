"use client"
import style from "./page.module.css"
import React, { useState } from 'react';

export default function Page() {
    const [intValue, setIntValue] = useState<number | ''>();
    const [textValue, setTextValue] = useState<string | ''>();

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (newValue === '' || (Number(newValue) >= 1 && Number(newValue) <= 10)) {
            setIntValue(newValue === '' ? '' : Number(newValue));
        }
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setTextValue(newValue === '' ? '' : newValue);
    };
    return (
        <div>
            <h1 className={style.title}>
                Редактирование оценки
            </h1>
            <h1 className={style.big}>
                Тип
            </h1>
            <h1 className={style.small}>
                Оц. в ведомость
            </h1>

            <h1 className={style.big}>
                Ученик
            </h1>
            <h1 className={style.small}>
                Иванов Иван Иванович
            </h1>
            <h1 className={style.big}>
                Задание
            </h1>
            <h1 className={style.small}>
                ДЗ_1
            </h1>

            <h1 className={style.big}>
                Оценка
            </h1>
            <input className={style.input} type={"number"} min={"1"} max={"10"} value={intValue} onChange={handleNumberChange} />
            <h1 className={style.big}>
                Комментарий
            </h1>
            <textarea className={style.bigInput} value={textValue} rows={4} />
            <div className={style.pad}>
                <button className={style.confirmButton}>Подтвердить изменения</button>
            </div>
        </div>
    )
}