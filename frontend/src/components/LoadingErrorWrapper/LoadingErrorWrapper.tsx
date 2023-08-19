import React from 'react';
import { Result } from 'antd';
import { RingLoader } from 'react-spinners';
import styles from './loadingErrorWrapper.module.css';

export default function LoadingErrorWrapper({
  isLoading,
  isError,
  children,
}: {
  isLoading: boolean;
  isError: boolean;
  children: React.ReactNode;
}) {
  if (isLoading) {
    return (
      <div className={styles.spinnerContainer}>
        <RingLoader loading color="#8be4ff" size={'10rem'} />
      </div>
    );
  } else if (isError) {
    return (
      <Result status="error" title={'Sorry, something went wrong.'}></Result>
    );
  } else {
    return children;
  }
}
