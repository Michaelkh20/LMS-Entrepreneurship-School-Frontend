import './globals.css';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

import StyledComponentsRegistry from '../lib/AntdRegistry';
import { ReduxProvider } from '@/redux/provider';

const mulish = Mulish({
  weight: ['300', '500', '700'],
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
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
