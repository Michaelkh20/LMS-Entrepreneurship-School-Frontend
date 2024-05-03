import styles from './Styles/ModalContainer.module.css';
import { ReactNode } from 'react';

export const ModalContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.ModalContainer}>{children}</div>;
};
