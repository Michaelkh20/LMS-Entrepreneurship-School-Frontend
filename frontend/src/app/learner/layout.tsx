import React from 'react';
import styles from './layout.module.css';
import Navbar from '@/components/NavBars/Navbar/Navbar';

export default function LearnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar balance={15} name="Ivan" isTrackerPage={false} />
      <main className={styles.main}>{children}</main>
    </>
  );
}
