import AccountProfile from '@/components/AccountProfile';

export default function Home({ params: { id } }: { params: { id: string } }) {
  return <AccountProfile id={id} />;
}
