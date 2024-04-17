import { Dropdown, Space, Button, Flex, Avatar } from 'antd';
import { LogoutOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/redux/features/authSlice';

export default function UserDropdown(
  {
    props: { name = 'Администратор' },
  }: {
    props: { name?: string };
  }
) {
  const router = useRouter();
  const [_, { logOut }] = useAuth();

  const handleLogOutClick = () => {
    logOut();
    router.push('/login');
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <a>Выйти</a>,
      icon: <LogoutOutlined />,
      onClick: handleLogOutClick,
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }}>
        <Button
          size="large"
          type="text"
          //   icon={<UserOutlined />}
          block
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '12px 0',
          }}
          onClick={()=>{router.push('/learner/profile')}}
        >
          <Space>
            <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
              U
            </Avatar>
            {name}
          </Space>

          <DownOutlined />
        </Button>
      </Dropdown>
    </>
  );
}
