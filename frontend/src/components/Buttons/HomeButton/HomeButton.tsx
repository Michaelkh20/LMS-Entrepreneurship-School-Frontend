'use client';

import React from 'react';
import styles from './homeButton.module.css';

import { LeftOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Role } from '@/types/common';
import {
  ADMIN_HOME_PAGE,
  LEARNER_HOME_PAGE,
  TRACKER_HOME_PAGE,
} from '../../../../constants';

export default function HomeButton({ role }: { role: Role }) {
  const href =
    role === Role.Admin
      ? ADMIN_HOME_PAGE
      : role === Role.Tracker
      ? TRACKER_HOME_PAGE
      : LEARNER_HOME_PAGE;

  return (
    <Link href={href} className={styles.button}>
      <LeftOutlined /> На главную
    </Link>
  );
}
