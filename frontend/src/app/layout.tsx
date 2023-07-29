import './globals.css';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

import StyledComponentsRegistry from '../lib/AntdRegistry';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store';

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
        <Provider store={store}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
