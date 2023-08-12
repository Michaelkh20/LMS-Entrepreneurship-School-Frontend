import { Id } from '@/types/common';
import React from 'react';
import EditAccountForm from './EditAccountForm';
import CreateAccountForm from './CreateAccountForm';

export default function AccountForm({ accountId }: { accountId?: Id }) {
  if (accountId) {
    return <EditAccountForm id={accountId} />;
  } else {
    return <CreateAccountForm />;
  }
}
