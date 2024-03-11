import React from 'react';
import styles from './prop.module.css';
import Link from 'next/link';

export default function Prop({
  label,
  value,
}: {
  label: string;
  value:
    | string
    | { content: string; href: string }
    | ((className: string) => React.ReactNode);
}) {
  if (!value) {
    return null;
  }

  return (
    <div className={styles.prop}>
      <p className={styles.type}>{label}</p>
      {typeof value === 'string' ? (
        <p className={styles.value}>{value}</p>
      ) : 'href' in value ? (
        <Link href={value.href} className={styles.value}>
          {value.content}
        </Link>
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
