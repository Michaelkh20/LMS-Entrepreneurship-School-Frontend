'use client';

import AccountProfile from '@/components/AccountProfile';

export default function Page({ params: { id } }: { params: { id: string } }) {
  return <AccountProfile id={id} isEditable />;
}
