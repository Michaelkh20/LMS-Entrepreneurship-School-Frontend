'use client';

import React, { CSSProperties, useEffect } from 'react';
import styles from './layout.module.css';
import { Layout } from 'antd';
import LearnerMenu from '../../components/Menu/LearnerMenu';
import LayoutMenuWrapper from '@/components/Layouts/LayoutMenuWrapper';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/redux/features/authSlice';

const { Header, Content, Footer, Sider } = Layout;

const SiderStyles: CSSProperties = {
  position: 'sticky',
  backgroundColor: '#fff',
  overflow: 'auto',
  height: '100vh',
  top: 0,
  borderInlineEnd: '1px solid #f0f0f0',
};

const OuterLayoutStyles: CSSProperties = {
  height: '100vh',
  overflowY: 'scroll',
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
};

const FooterStyles: CSSProperties = {
  backgroundColor: '#fff',
  borderTop: '1px solid #f0f0f0',
};

export default function LearnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [, , { isLearner, isTracker }] = useAuth();
  useEffect(() => {
    document.documentElement.classList.add(styles.HTMLAdminLayout);
    document.body.classList.add(styles.BodyAdminLayout);

    return () => {
      document.documentElement.classList.remove(styles.HTMLAdminLayout);
      document.body.classList.remove(styles.BodyAdminLayout);
    };
  }, []);

  useEffect(() => {
    if (!isLearner && !isTracker) {
      router.push('/login');
    }
  }, [isLearner, isTracker, router]);

  return (
    <Layout hasSider style={OuterLayoutStyles}>
      <LayoutMenuWrapper MenuComponent={LearnerMenu} />

      <Layout style={InnerLayoutStyles}>
        {/* <Header style={HeaderStyles}></Header> */}
        <Content style={ContentStyles}>{children}</Content>
        <Footer style={FooterStyles}></Footer>
      </Layout>
    </Layout>
  );
}
