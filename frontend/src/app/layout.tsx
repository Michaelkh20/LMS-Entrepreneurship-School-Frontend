import './globals.css';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

// import StyledComponentsRegistry from '../lib/AntdRegistry';
import { ReduxProvider } from '@/redux/provider';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const mulish = Mulish({
  weight: ['300', '500', '600', '700'],
  style: 'normal',
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
  title: 'Entrepreneurship School',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={mulish.className}>
        <ReduxProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
