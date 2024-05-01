import styles from './BasePageLayout.module.css';
import { ReactNode } from 'react';

export const BasePageLayout = ({
  children,
  header,
}: {
  children: ReactNode;
  header: ReactNode;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{header}</div>
      {/* <div className={styles.main}>{children}</div> */}
      {children}
    </div>
  );
};
