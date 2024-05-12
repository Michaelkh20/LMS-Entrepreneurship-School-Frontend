import { Space, Button, Avatar } from 'antd';
import { LogoutOutlined, LoginOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/redux/features/authSlice';
import { AuthStatus } from '@/types/redux';

export default function UserDropdown() {
  const router = useRouter();
  const [AuthState, { logOut }, { isAdmin }] = useAuth();

  const handleLogOutClick = () => {
    logOut();
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
      {AuthState.status === AuthStatus.NOT_AUTHED ? (
        <Button
          block
          type="text"
          style={{ textAlign: 'start', height: '2.5rem', marginTop: '1rem' }}
          onClick={() => {
            router.push('/login');
          }}
        >
          <LoginOutlined />
          Войти
        </Button>
      ) : (
        <>
          {isAdmin ? (
            <Space
              style={{
                display: 'flex',
                // justifyContent: 'space-between',
                alignItems: 'center',
                padding: '7px 15px',
                margin: '12px 0 8px 0',
                fontSize: 16,
              }}
            >
              <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
                A
              </Avatar>
              {'Администратор'}
            </Space>
          ) : (
            <Button
              size="large"
              type="text"
              block
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '12px 0 8px 0',
              }}
              onClick={() => {
                !isAdmin && router.push('/profile');
              }}
            >
              <Space>
                <Avatar
                  style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                >
                  U
                </Avatar>
                {`${AuthState.surname} ${AuthState.name}`}
              </Space>
            </Button>
          )}
          <Button
            block
            type="text"
            style={{
              textAlign: 'start',
              height: '2.5rem',
              paddingLeft: '1.5rem',
            }}
            onClick={handleLogOutClick}
          >
            <LogoutOutlined />
            Выйти
          </Button>
        </>
      )}
    </>
  );
}
