import React from 'react';
import { Result } from 'antd';
import { RingLoader } from 'react-spinners';
import styles from './LoadingErrorStub.module.css';

export default function LoadingErrorStub({
  isLoading,
  isError,
}: {
  isLoading: boolean;
  isError: boolean;
}) {
  if (isLoading) {
    return (
      <div className={styles.spinnerContainer}>
        <RingLoader loading color="#8be4ff" size={'10rem'} />
      </div>
    );
  } else if (isError) {
    return (
      <Result status="error" title={'Извините, что-то пошло не так.'}></Result>
    );
  } else {
    return null;
  }
}
