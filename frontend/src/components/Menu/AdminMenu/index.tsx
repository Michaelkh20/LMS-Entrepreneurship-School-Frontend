import UserDropdown from '@/components/Dropdowns/UserDropdown';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import React from 'react';

const menuItems: MenuProps['items'] = [
  {
    label: 'Страницы',
    key: 'Pages_divider',
    type: 'group',
    children: [
      {
        key: 'accounts',
        label: <Link href="/admin/accounts">Аккаунты</Link>,
        icon: <UserOutlined />,
      },
      {
        key: 'teams',
        label: <Link href="/admin/teams">Команды</Link>,
        icon: <TeamOutlined />,
      },
      {
        key: 'assessments',
        label: <Link href="/admin/assessments">Оценки</Link>,
      },
      {
        key: 'claims',
        label: 'Заявки',
        children: [
          {
            key: 'claims:lots-purchase-sale',
            label: (
              <Link href="/admin/claims/lots-purchase-sale">
                Купля-Продажа лотов
              </Link>
            ),
          },
          {
            key: 'claims:lots-listing',
            label: (
              <Link href="/admin/claims/lots-listing">Размещение лотов</Link>
            ),
          },
          {
            key: 'claims:overdue-deadlines',
            label: (
              <Link href="/admin/claims/overdue-deadlines">
                Просроченные дедлайны
              </Link>
            ),
          },
          {
            key: 'claims:transfers',
            label: <Link href="/admin/claims/transfers">Переводы ШПрот</Link>,
          },
        ],
      },
      {
        key: 'transactions',
        label: <Link href="/admin/transactions">Транзакции</Link>,
      },
      {
        key: 'lots',
        label: <Link href="/admin/lots">Лоты</Link>,
      },
      {
        key: 'lessons',
        label: <Link href="/admin/lessons">Уроки</Link>,
      },
      {
        key: 'tasks',
        label: 'Задания',
        children: [
          {
            key: 'tasks:Homeworks',
            label: <Link href="/admin/tasks/homeworks">Домашние задания</Link>,
          },
          {
            key: 'tasks:tests',
            label: <Link href="/admin/tasks/tests">Тесты</Link>,
          },
          {
            key: 'tasks:competitions',
            label: <Link href="/admin/tasks/competitions">Конкурсы</Link>,
          },
          {
            key: 'tasks:exams',
            label: <Link href="/admin/tasks/exams">Экзамены</Link>,
          },
        ],
      },
      {
        key: 'attendance',
        label: <Link href="/admin/attendance">Посещаемость</Link>,
      },
      {
        key: 'final-grade-formula',
        label: (
          <Link href="/admin/final-grade-formula">Формула итоговой оценки</Link>
        ),
      },
    ],
  },
];

export default function AdminMenu() {
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
          name: undefined,
        }}
      />
      {/* <Menu mode="inline" items={menuItems} style={{ height: '100vh' }} /> */}
      <Menu mode="inline" items={menuItems} />
    </ConfigProvider>
  );
}
