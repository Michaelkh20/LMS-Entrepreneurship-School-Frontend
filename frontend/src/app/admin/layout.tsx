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
  // borderInlineEnd: '1px solid rgba(5, 5, 5, 0.06)' 
  borderInlineEnd: '1px solid #f0f0f0' 
};

const OuterLayoutStyles: CSSProperties = {
  height: '100vh',
  overflowY: 'auto',
  justifyContent: 'center',
  backgroundColor: '#fff',
};

const InnerLayoutStyles: CSSProperties = {
  maxWidth: 'calc(1920px - 256px)',
  backgroundColor: '#fff',
};

const HeaderStyles: CSSProperties = {
  backgroundColor: '#fff',
  borderBottom: '1px solid #f0f0f0',
};

const ContentStyles: CSSProperties = {
  flex: '1 0 auto',
  maxWidth: '1440px',
  // padding: '24px 16px 16px 16px'
};

const FooterStyles: CSSProperties = {
  backgroundColor: '#fff',
  borderTop: '1px solid #f0f0f0',
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
        <Header style={HeaderStyles}>Here will be header</Header>
        <Content style={ContentStyles}>{children}</Content>
        {/* <Footer style={FooterStyles}>Here will be footer</Footer> */}
      </Layout>
    </Layout>
  );
}
