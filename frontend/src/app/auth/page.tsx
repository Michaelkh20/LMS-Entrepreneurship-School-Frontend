import React from 'react';
import styles from './auth.module.css';

const Authorization: React.FC = () => {
  return (
    <div className={styles.main}>
      <img src="authBackground.svg" alt="sdfds" />
      <div className={styles.components}>
        <span>АВТОРИЗАЦИЯ</span>
      </div>
    </div>
  );
};
export default Authorization;
