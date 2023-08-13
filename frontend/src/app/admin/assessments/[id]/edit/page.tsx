'use client';
import styles from './page.module.css';
import React, { useState } from 'react';
import { Input } from 'antd';
import { Jura } from 'next/font/google';

const jura = Jura({
  subsets: ['cyrillic'],
});

export default function Page() {
  const [intValue, setIntValue] = useState<number | ''>();
  const [textValue, setTextValue] = useState<string | ''>();

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === '' || (Number(newValue) >= 1 && Number(newValue) <= 10)) {
      setIntValue(newValue === '' ? '' : Number(newValue));
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setTextValue(newValue === '' ? '' : newValue);
  };

  return (
    <div>
      <h1 className={`${styles.title} ${jura.className}`}>
        РЕДАКТИРОВАНИЕ ОЦЕНКИ
      </h1>

      <div className={styles.grade_props}>
        <div className={styles.grade_props_component}>
          <p className={styles.prop_type}>Тип</p>
          <p className={styles.prop_value}>Оц. в ведомость</p>
        </div>
        <div className={styles.grade_props_component}>
          <p className={styles.prop_type}>Ученик</p>
          <p className={styles.prop_value}>Иванов Иван Иванович</p>
        </div>
        <div className={styles.grade_props_component}>
          <p className={styles.prop_type}>Задание</p>
          <p className={styles.prop_value}>ДЗ_1</p>
        </div>
      </div>

      <div className={styles.input_box}>
        <div className={styles.prop_label_container}>
          <p className={styles.prop_label}>Оценка</p>
          <Input
            style={{
              width: '4.5rem',
              height: '2.5rem',
              fontSize: '1.2rem',
            }}
            type="number"
            min={1}
            max={10}
            value={intValue}
            onChange={handleNumberChange}
          />
        </div>

        <div className={styles.prop_label_container}>
          <p className={styles.prop_label}>Комментарий</p>
          <Input.TextArea
            style={{ width: '14rem', fontSize: '1rem' }}
            value={textValue}
            rows={6}
            onChange={handleTextChange}
          />
        </div>
      </div>

      <div className={styles.pad}>
        <button className={styles.confirmButton}>Подтвердить изменения</button>
      </div>
    </div>
  );
}
