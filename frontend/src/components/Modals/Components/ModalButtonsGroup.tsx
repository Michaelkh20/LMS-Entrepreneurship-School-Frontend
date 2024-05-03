import styles from './Styles/ModalButtonsGroup.module.css';
import { ReactNode } from 'react';

export const ModalButtonsGroup = ({ children }: { children: ReactNode }) => {
  return <div className={styles.buttonsContainer}>{children}</div>;
};
