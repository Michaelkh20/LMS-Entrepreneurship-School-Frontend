'use client';

import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { CSSProperties, ComponentType, useState } from 'react';

const SiderStyles: CSSProperties = {
  position: 'sticky',
  backgroundColor: '#fff',
  overflow: 'auto',
  height: '100vh',
  left: 0,
  borderInlineEnd: '1px solid #f0f0f0',
  top: 0,
};

export default function LayoutMenuWrapper({
  MenuComponent,
}: {
  MenuComponent: ComponentType<{ onClose: () => void }>;
}) {
  const [isMenuBroken, setIsMenuBroken] = useState<boolean>(
    window.innerWidth >= 992 ? false : true
  );
  const [openMenu, setOpenMenu] = useState(false);

  const showDrawer = () => {
    setOpenMenu(!openMenu);
  };

  const onClose = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <Sider
        width="256px"
        style={isMenuBroken ? { display: 'none' } : SiderStyles}
        breakpoint="lg"
        collapsible={false}
        onBreakpoint={(broken) => {
          setIsMenuBroken(broken);
        }}
      >
        <MenuComponent onClose={onClose}></MenuComponent>
      </Sider>

      <Drawer
        onClose={onClose}
        open={openMenu}
        rootStyle={!isMenuBroken ? { display: 'none' } : {}}
        styles={{
          body: { padding: 0 },
          wrapper: { maxWidth: 300 },
        }}
      >
        <Sider
          width="100%"
          breakpoint="lg"
          collapsible={false}
          collapsed={false}
          onBreakpoint={(broken) => {
            setIsMenuBroken(broken);
          }}
        >
          <MenuComponent onClose={onClose}></MenuComponent>
        </Sider>
      </Drawer>

      <div
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          display: !isMenuBroken ? 'none' : 'block',
          zIndex: 10,
        }}
      >
        <Button onClick={showDrawer}>
          <MenuOutlined />
        </Button>
      </div>
    </>
  );
}
