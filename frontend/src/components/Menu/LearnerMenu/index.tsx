import UserDropdown from '@/components/Dropdowns/UserDropdown';
import { DollarOutlined } from '@ant-design/icons';
import { ConfigProvider, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import React from 'react';
import { useAuth } from '../../../redux/features/authSlice';
import { useGetUserBalanceByIdQuery } from '@/redux/services/api';

const menuItems: MenuProps['items'] = [
  {
    label: 'Страницы',
    key: 'Pages_divider',
    type: 'group',
    children: [
      {
        key: 'shop',
        label: <Link href="/learner/shop">Магазин</Link>,
      },
      {
        key: 'lessons',
        label: <Link href="/learner/lessons">Уроки</Link>,
      },
      {
        key: 'assessments',
        label: <Link href="/learner/assessments">Оценки</Link>,
      },
      {
        key: 'lots',
        label: 'Лоты',
        children: [
          {
            key: 'lots:buy',
            label: <Link href="/learner/lots/buy">Я купил</Link>,
          },
          {
            key: 'lots:sell',
            label: <Link href="/learner/lots/sell">Я продаю</Link>,
          },
        ],
      },
      {
        key: 'claims',
        label: 'Заявки',
        children: [
          {
            key: 'claims:lots-purchase-sale',
            label: (
              <Link href="/learner/claims/lots-purchase-sale">
                Купля-Продажа лотов
              </Link>
            ),
          },
          {
            key: 'claims:lots-listing',
            label: (
              <Link href="/learner/claims/lots-listing">Размещение лотов</Link>
            ),
          },
          {
            key: 'claims:transfers',
            label: <Link href="/learner/claims/transfers">Переводы ШПрот</Link>,
          },
        ],
      },
      {
        key: 'transactions',
        label: <Link href="/learner/transactions">Транзакции</Link>,
      },
      {
        key: 'HW',
        label: <Link href="/learner/homeworks">ДЗ</Link>,
      },
    ],
  },
];

export default function LearnerMenu() {
  const [authState] = useAuth();
  const { data } = useGetUserBalanceByIdQuery(authState.userId!);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            activeBarBorderWidth: 0,
          },
        },
      }}
    >
      <UserDropdown
        props={{
          // name: data?.name || 'Михаил',
          name: 'Михаил',
        }}
      />
      <div
        style={{
          padding: '12px 16px 12px 16px',
          fontSize: '1rem',
          fontWeight: 'bold',
        }}
      >
        <DollarOutlined /> {data?.balance || ''} ШП
      </div>
      <Menu mode="inline" items={menuItems} />
    </ConfigProvider>
  );
}
