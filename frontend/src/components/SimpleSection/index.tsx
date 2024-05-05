import React from 'react';
import styles from './SimpleSection.module.css';

type Props = React.PropsWithChildren<{
  title: string;
}>;

export default function SimpleSection({ title, children }: Props) {
  return (
    <section className={styles.section}>
      <p className={styles.section_title}>{title}</p>
      {children}
    </section>
  );
}
