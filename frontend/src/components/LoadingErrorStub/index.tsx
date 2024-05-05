import React from 'react';
import { Result } from 'antd';
import { RingLoader } from 'react-spinners';
import styles from './LoadingErrorStub.module.css';

export default function LoadingErrorStub({
  isLoading,
  isError,
  errorText = 'Извините, что-то пошло не так.',
}: {
  isLoading: boolean;
  isError: boolean;
  errorText?: string;
}) {
  if (isLoading) {
    return (
      <div className={styles.spinnerContainer}>
        <RingLoader loading color="#8be4ff" size={'10rem'} />
      </div>
    );
  } else if (isError) {
    return <Result status="error" title={errorText}></Result>;
  } else {
    return null;
  }
}
