'use client';

import AccountProfile from '@/components/AccountProfile';
import { useAuth } from '@/redux/features/authSlice';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [authState] = useAuth();

  if (!authState.id) {
    router.push('/login');
    return null;
  }

  return <AccountProfile id={authState.id} />;
}
