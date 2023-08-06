import React from 'react';
import styles from './layout.module.css';
import AdminNavbar from '@/components/NavBars/AdminNavbar/AdminNavbar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminNavbar />
      <main className={styles.main}>{children}</main>
    </>
  );
}
