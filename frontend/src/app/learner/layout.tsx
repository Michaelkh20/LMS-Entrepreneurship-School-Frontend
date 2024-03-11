'use client';

import React, { CSSProperties, useEffect } from 'react';
import styles from './layout.module.css';
import { Layout } from 'antd';
import LearnerMenu from '@/components/Menu/LearnerMenu.tsx';

const { Header, Content, Footer, Sider } = Layout;

const SiderStyles: CSSProperties = {
  backgroundColor: '#fff',
  overflow: 'auto',
  height: '100vh',
};

const ContentLayoutStyles: CSSProperties = {
  height: '100vh',
  overflowY: 'auto',
  backgroundColor: 'white',
};

const ContentStyles: CSSProperties = {
  flex: '1 0 auto',
};

export default function LearnerLayout({
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
    <Layout hasSider>
      <Sider width="256px" style={SiderStyles}>
        <LearnerMenu />
      </Sider>
      <Layout style={ContentLayoutStyles}>
        <Header style={{ backgroundColor: '#fff' }}>Here will be header</Header>
        <Content style={ContentStyles}>{children}</Content>
        <Footer>Here will be footer</Footer>
      </Layout>
    </Layout>
  );
}
