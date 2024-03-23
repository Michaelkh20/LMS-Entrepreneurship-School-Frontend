'use client';

import { useGetTeamQuery } from '@/redux/services/adminApi';

export default function Page({ params: { id } }: { params: { id: string } }) {
  const { data } = useGetTeamQuery(id);
  console.log(data);
  return null;
}
