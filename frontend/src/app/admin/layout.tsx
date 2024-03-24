'use client';

import React, { CSSProperties, useEffect, useState } from 'react';
import styles from './layout.module.css';
import { Breadcrumb, Layout } from 'antd';
import AdminMenu from '@/components/Menu/AdminMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'path';

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
  const routerPathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add(styles.HTMLAdminLayout);
    document.body.classList.add(styles.BodyAdminLayout);

    return () => {
      document.documentElement.classList.remove(styles.HTMLAdminLayout);
      document.body.classList.remove(styles.BodyAdminLayout);
    };
  }, []);

  const pathUtil = (pathname: string): Array<string> => {
    return pathname.split('/');
    // return pathname.trim().split(/\s*(?:\/|$)\s*/);
  };

  const [pathItems, setPathItems] = useState<{ title: string; path: string }[]>(
    []
  );

  useEffect(() => {
    console.log();
    const pathArr = pathUtil(routerPathname);
    setPathItems((prevState) => {
      return [{ title: pathArr[pathArr.length - 1], path: routerPathname }];
    });
  }, [routerPathname]);

  // function itemRender(currentRoute: any, params: any, items: any, paths: any) {
  //   console.log('AAAAAA', currentRoute, paths);
  //   console.log('history: ', routerPathname);
  //   const isLast = currentRoute?.path === items[items.length - 1]?.path;

  //   return isLast ? (
  //     <span>{currentRoute.title}</span>
  //   ) : (
  //     <Link href={`/${paths.join('/')}`}>{currentRoute.title}</Link>
  //   );
  // }

  function itemRender(currentRoute: any, params: any, items: any, paths: any) {
    console.log('AAAAAA', currentRoute, items, path);
    const isLast = currentRoute?.path === items[items.length - 1]?.path;

    return isLast ? (
      <span>{currentRoute.title}</span>
    ) : (
      <Link href={`/${paths.join('/')}`}>{currentRoute.title}</Link>
    );
  }

  return (
    <Layout hasSider style={OuterLayoutStyles}>
      <Sider width="256px" style={SiderStyles}>
        <AdminMenu />
      </Sider>
      <Layout style={InnerLayoutStyles}>
        {/* <Header style={HeaderStyles}>Here will be header</Header> */}
        <Header style={HeaderStyles}>
          {/* <Breadcrumb itemRender={itemRender} items={pathItems}></Breadcrumb> */}
        </Header>
        <Content style={ContentStyles}>{children}</Content>
        {/* <Footer style={FooterStyles}>Here will be footer</Footer> */}
      </Layout>
    </Layout>
  );
  // return (
  //   <Layout style={wrapper_page}>
  //     <Header style={header}>
  //       <div style={{width: 256, display:'flex', padding: '0 1rem',background: "#ccc", borderInlineEnd: '1px solid #f0f0f0' }}>Админ</div>
  //       <Breadcrumb itemRender={itemRender} items={pathItems}></Breadcrumb>
  //     </Header>

  //     <Layout hasSider style={wrapper_content}>
  //       {/* <Header style={HeaderStyles}>Here will be header</Header> */}
  //       <Sider width="256px">
  //         <AdminMenu />
  //       </Sider>
  //       <Content style={content}> {children}</Content>
  //       {/* <Footer style={FooterStyles}>Here will be footer</Footer> */}
  //     </Layout>
  //   </Layout>
  // );
}
const wrapper_page: CSSProperties = {
  height: '100vh',
  overflowY: 'scroll',
  justifyContent: 'center',
  backgroundColor: '#fff',
};
const wrapper_content: CSSProperties = {
  maxWidth: 1920,
  margin: '0 auto',
  display: 'flex',
  width: '100%',
  background: ' #fff',
};

const header: CSSProperties = {
  maxWidth: 1920,
  margin: '0 auto',
  display: 'flex',
  padding: 0,
  width: '100%',
  background: '#fff',
};

const content: CSSProperties = {
  maxWidth: '1440px',
  backgroundColor: '#fff',
  flex: '1 0 auto',
};
