import React, { Suspense } from 'react';
import SetPasswordForm from '@/components/Forms/SetPassword';
import styles from './page.module.css';

export default function SetPasswordPage() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>Установка пароля</div>
      <Suspense>
        <SetPasswordForm className={styles.Form} />
      </Suspense>
    </div>
  );
}
