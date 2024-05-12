import UserDropdown from '@/components/Dropdowns/UserDropdown';
import { DollarOutlined } from '@ant-design/icons';
import { ConfigProvider, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { useAuth } from '../../../redux/features/authSlice';
import { useGetUserBalanceByIdQuery } from '@/redux/services/api';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import dollarSvg from '../../../../public/dollar.svg';
import useLearnerTrackerMenuItems from './menuItems';

export default function LearnerMenu({ onClose }: { onClose?: () => void }) {
  const [authState] = useAuth();
  const menuItems = useLearnerTrackerMenuItems();
  const { data } = useGetUserBalanceByIdQuery(authState.userId!, {
    pollingInterval: 60 * 1_000,
  });
  const pathname = usePathname();

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
      <div style={{ padding: '0 4px' }}>
        <UserDropdown />
      </div>
      <div
        style={{
          padding: '12px 16px 12px 24px',
          fontSize: '1rem',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* <DollarOutlined /> */}
        <Image width={20} height={20} src={dollarSvg} alt="asd" />{' '}
        {data?.balance || '0'}
      </div>
      <Menu
        mode="inline"
        items={menuItems}
        defaultSelectedKeys={[pathname.split('/').at(-1)!]}
        onClick={onClose}
      />
    </ConfigProvider>
  );
}
