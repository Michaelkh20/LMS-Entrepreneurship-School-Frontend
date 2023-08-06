import React from 'react';
import styles from './auth.module.css';
import inscription from '../landing.module.css';

const Authorization: React.FC = () => {
  return (
    <div className={styles.main}>
      <img src="./auth/authBackground.svg" alt="sdfds" />
      <div className={styles.components}>
        <span>АВТОРИЗАЦИЯ</span>
      </div>

      <div className={styles.logPass}>
        <form>
          <div>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Введите логин"
            />
            <img src="./auth/userIcon.svg" alt="" />
          </div>

          <div pass="">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Введите пароль"
            />
            <img src="./auth/lockIcon.svg" alt="" />
          </div>
        </form>

        <div>
          <button>
            <span>Войти</span>
            <img src="./auth/rightArrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Authorization;
