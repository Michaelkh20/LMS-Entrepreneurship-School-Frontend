import styles from './Styles/ModalProperty.module.css';
import { ReactNode } from 'react';

export const ModalProperty = ({
  title,
  value,
}: {
  title: string;
  value: ReactNode;
}) => {
  return (
    <div className={styles.PropertyContainer}>
      <p className={styles.PropertyTitle}>{title}</p>
      <div className={styles.PropertyValue}>{value}</div>
    </div>
  );
};
