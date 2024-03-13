import { Dropdown, Space, Button, Flex, Avatar } from 'antd';
import { LogoutOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <a>Выйти</a>,
    icon: <LogoutOutlined />,
  },
];

export default function UserDropdown() {
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
        >
          <Space>
            <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
            Администратор
          </Space>

          <DownOutlined />
        </Button>
      </Dropdown>
    </>
  );
}
