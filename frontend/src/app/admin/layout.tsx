'use client';

import React, { CSSProperties, useEffect } from 'react';
import styles from './layout.module.css';
import { Layout } from 'antd';
import AdminMenu from '@/components/Menu/AdminMenu';
import LayoutMenuWrapper from '@/components/Layouts/LayoutMenuWrapper';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/redux/features/authSlice';

const { Header, Content, Footer, Sider } = Layout;

const SiderStyles: CSSProperties = {
  position: 'sticky',
  backgroundColor: '#fff',
  overflow: 'auto',
  height: '100vh',
  left: 0,
  // borderInlineEnd: '1px solid rgba(5, 5, 5, 0.06)'
  borderInlineEnd: '1px solid #f0f0f0',
  top: 0,
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
  const router = useRouter();
  const [, , { isAdmin }] = useAuth();

  useEffect(() => {
    document.documentElement.classList.add(styles.HTMLAdminLayout);
    document.body.classList.add(styles.BodyAdminLayout);

    return () => {
      document.documentElement.classList.remove(styles.HTMLAdminLayout);
      document.body.classList.remove(styles.BodyAdminLayout);
    };
  }, []);

  useEffect(() => {
    console.log("isAdmin: ", isAdmin)
    if (!isAdmin) {
      router.push('/login');
    }
  }, [isAdmin, router]);

  return (
    <Layout hasSider style={OuterLayoutStyles}>
      <LayoutMenuWrapper MenuComponent={AdminMenu} />
      <Layout style={InnerLayoutStyles}>
        {/* <Header style={HeaderStyles}>
            <Breadcrumb itemRender={itemRender} items={pathItems}></Breadcrumb>
          </Header> */}

        <Content style={ContentStyles}>{children}</Content>
      </Layout>
    </Layout>
  );
}
