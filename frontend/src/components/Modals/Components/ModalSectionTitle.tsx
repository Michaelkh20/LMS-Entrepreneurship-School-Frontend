import styles from './Styles/ModalSectionTitle.module.css';
import { ReactNode } from 'react';

export const ModalSectionTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className={styles.SectionTitle}>{children}</h2>;
};
