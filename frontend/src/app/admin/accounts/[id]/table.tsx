import React from 'react';
import styles from './Table.module.css';

const Table: React.FC = () => {
  return (
    <table className={`${styles.table} ${styles.localClass}`}>
      <thead>
        <tr>
          <th>Элемент контроля</th>
          <th className={styles.column20}>20% тестирования</th>
          <th className={styles.column20}>40% Домашнее задание</th>
          <th className={styles.column10}>10% конкурсы</th>
          <th className={styles.column20}>20% экзамен</th>
          <th className={styles.column10}>10% посещаемость</th>
          <th className={styles.column10}>Бонус</th>
          <th className={styles.column10}>Итог</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Значение 1</td>
          <td>Значение 2</td>
          <td>Значение 3</td>
          <td>Значение 4</td>
          <td>Значение 5</td>
          <td>Значение 6</td>
          <td>Значение 7</td>
          <td>Значение 8</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
