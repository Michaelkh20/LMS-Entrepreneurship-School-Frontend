import { Menu, MenuProps } from 'antd';
import Link from 'next/link';
import React from 'react';

const menuItems: MenuProps['items'] = [
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
    label: <Link href="/admin/transactions">Транзакции</Link>,
  },
  {
    key: 'HW',
    label: <Link href="/admin/homeworks">ДЗ</Link>,
  },
];

export default function LearnerMenu() {
  return <Menu mode="inline" items={menuItems} style={{ height: '100vh' }} />;
}
