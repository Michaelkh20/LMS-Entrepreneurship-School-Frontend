import React from 'react';
import styles from './prop.module.css';

export default function Prop({
  label,
  value,
}: {
  label: string;
  value: string | ((className: string) => React.ReactNode);
}) {
  return (
    <div className={styles.prop}>
      <p className={styles.type}>{label}</p>
      {typeof value === 'string' ? (
        <p className={styles.value}>{value}</p>
      ) : (
        value(styles.value)
      )}
    </div>
  );
}

Prop.Container = function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${styles.container} ${className || ''}`}>{children}</div>
  );
};
