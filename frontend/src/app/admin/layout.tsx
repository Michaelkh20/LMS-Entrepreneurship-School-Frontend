import React from 'react';
import styles from './layout.module.css';
import NavBarAdmin from '@/components/headers/header-admin/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBarAdmin isHomePage={false} />
      <main className={styles.main}>{children}</main>
    </>
  );
}
