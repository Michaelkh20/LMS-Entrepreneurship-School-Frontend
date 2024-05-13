import { useAuth } from '@/redux/features/authSlice';
import { ItemType, MenuItemGroupType } from 'antd/lib/menu/hooks/useItems';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

const baseMenuItem: MenuItemGroupType = {
  label: 'Страницы',
  key: 'Pages_divider',
  type: 'group',
  children: [
    {
      key: 'shop',
      label: <Link href="/shop">Магазин</Link>,
    },
    {
      key: 'lessons',
      label: <Link href="/lessons">Уроки</Link>,
    },
    {
      key: 'lots',
      label: 'Лоты',
      children: [
        {
          key: 'lots:buy',
          label: <Link href="/lots/buy">Я купил</Link>,
        },
        {
          key: 'lots:sell',
          label: <Link href="/lots/sell">Я продаю</Link>,
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
            <Link href="/claims/lots-purchase-sale">Купля-Продажа лотов</Link>
          ),
        },
        {
          key: 'claims:lots-listing',
          label: <Link href="/claims/lots-listing">Размещение лотов</Link>,
        },
        {
          key: 'claims:transfers',
          label: <Link href="/claims/transfers">Переводы ШПрот</Link>,
        },
      ],
    },
    // {
    //   key: 'transactions',
    //   label: <Link href="/transactions">Транзакции</Link>,
    // },
  ],
};

const gradingMenuItem: ItemType = {
  key: 'grading:tracker',
  label: <Link href="/grading">Оценивание</Link>,
};

export default function useLearnerTrackerMenuItems(): ItemType[] {
  const [, , { isTracker }] = useAuth();

  const menuItem = useMemo(() => {
    let children = baseMenuItem.children || [];

    children = children.filter((child) =>
      child ? child.key !== 'grading:tracker' : true
    );

    if (isTracker) {
      children.push(gradingMenuItem);
    }

    baseMenuItem.children = children;

    return baseMenuItem;
  }, [isTracker]);

  return [menuItem];
}
