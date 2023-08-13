import React from 'react';
import styles from './auth.module.css';
import Image from 'next/image';

const Authorization: React.FC = () => {
  return (
    <div className={styles.main}>
      {/* <Image
        width={1440}
        height={835}
        layout="responsive"
        src="./auth/authBackground.svg"
        alt=""
      /> */}
      <img src="./auth/authBackground.svg" alt="" />
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

          <div className={styles.pass}>
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
