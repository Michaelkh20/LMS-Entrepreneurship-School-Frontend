import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

export function Block(props) {
  return (
    <div className={styles.componentBlock}>
      <div className={styles.name}>
        <span className={styles.number}>{props.number}</span>
        <span className={styles.about}>{props.about}</span>
      </div>
      <span className={styles.description}>{props.description}</span>
    </div>
  );
}

export function AnnaText(props) {
  return (
    <div>
      <Image width={25} height={25} src="./landing/PinkCircle.svg" alt="" />
      <span>{props.text}</span>
    </div>
  );
}

export function ContestText(props) {
  if (props.color === 'blue') {
    return <span className={styles.blue}>{props.text}</span>;
  } else if (props.color === 'pink') {
    return <span className={styles.pink}>{props.text}</span>;
  } else {
    return <span className={styles.grey}>{props.text}</span>;
  }
}
