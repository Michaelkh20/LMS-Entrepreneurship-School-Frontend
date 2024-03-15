'use client';

import React, { CSSProperties, useEffect } from 'react';
import styles from './layout.module.css';
import { Layout } from 'antd';
import AdminMenu from '@/components/Menu/AdminMenu';

const { Header, Content, Footer, Sider } = Layout;

const SiderStyles: CSSProperties = {
  position: 'sticky',
  backgroundColor: '#fff',
  overflow: 'auto',
  height: '100vh',
  left: 0,
};

const OuterLayoutStyles: CSSProperties = {
  height: '100vh',
  overflowY: 'auto',
  justifyContent: 'center',
  backgroundColor: '#fff',
};

const InnerLayoutStyles: CSSProperties = {
  maxWidth: 'calc(1920px - 256px)',
};

const ContentStyles: CSSProperties = {
  padding: '1rem',
  flex: '1 0 auto',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.classList.add(styles.HTMLAdminLayout);
    document.body.classList.add(styles.BodyAdminLayout);

    return () => {
      document.documentElement.classList.remove(styles.HTMLAdminLayout);
      document.body.classList.remove(styles.BodyAdminLayout);
    };
  }, []);

  return (
    <Layout hasSider style={OuterLayoutStyles}>
      <Sider width="256px" style={SiderStyles}>
        <AdminMenu />
      </Sider>
      <Layout style={InnerLayoutStyles}>
        <Header style={{ backgroundColor: '#fff' }}>Here will be header</Header>
        <Content style={ContentStyles}>{children}</Content>
        <Footer>Here will be footer</Footer>
      </Layout>
    </Layout>
  );
}
