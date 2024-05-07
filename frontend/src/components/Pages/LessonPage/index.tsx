'use client';

import { CSSProperties, useMemo, useState } from 'react';

// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';

import { useGetLessonByIdQuery } from '@/redux/services/api';

import { Button, Collapse, CollapseProps, Space } from 'antd';
import DOMPurify from 'dompurify';

import { HomeworkPage } from '@/components/Pages/HomeworkPage';
import { TestPage } from '@/components/Pages/TestPage';
import { useAuth } from '@/redux/features/authSlice';

import styles from './LessonPage.module.css';
import { EditOutlined, PaperClipOutlined } from '@ant-design/icons';
import { VideoSection } from './Components/VideoSection';
import { PresentationsSection } from './Components/PresentationsSection';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { useRouter } from 'next/navigation';
import LessonDeleteBtn from '@/components/Buttons/DeleteButtons/LessonDeleteBtn';

type lessonType = {
  lessonTitle: string;
  lessonDescription: string;
};

export const LessonPage = ({ params: { id } }: { params: { id: string } }) => {
  const router = useRouter();
  const { data } = useGetLessonByIdQuery(id);
  const [textField, setTextField] = useState('');

  const [, , { isAdmin }] = useAuth();

  const collapseItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (
    panelStyle
  ) =>
    useMemo(() => {
      return [
        {
          key: '1',
          label: 'Описание',
          style: panelStyle,
          // children: <div>{data?.lesson?.description}</div>,
          children: (
            <div
              style={{
                // whiteSpace: 'pre',
                paddingLeft: '1rem',
                // fontSize: '1rem',
                wordBreak: 'break-word',
              }}
              dangerouslySetInnerHTML={
                data?.lesson?.description !== undefined
                  ? {
                      __html: DOMPurify.sanitize(data.lesson.description),
                    }
                  : undefined
              }
            ></div>
          ),
        },
        {
          key: '2',
          label: 'Материалы',
          style: panelStyle,
          children: (
            <div>
              <VideoSection videoUrls={data?.lesson?.videoUrls!} />
              <PresentationsSection
                presentationUrls={data?.lesson?.presentationUrls!}
              />
            </div>
          ),
        },
        {
          key: '3',
          label: 'Домашнее задание',
          style: panelStyle,
          children: (
            <Collapse
              defaultActiveKey={'0'}
              items={data?.lesson?.homeworkIds.map((hwId, index) => {
                return {
                  key: index + 'HW' + hwId,
                  label: `ДЗ ${index + 1}`,
                  children: <HomeworkPage hwId={hwId}></HomeworkPage>,
                };
              })}
            ></Collapse>
          ),
        },
        {
          key: '4',
          label: 'Тест',
          style: panelStyle,
          children: (
            <Collapse
              defaultActiveKey={'0'}
              items={data?.lesson?.testIds.map((testId, index) => {
                console.log('TEST ID: ', testId);
                return {
                  key: index + 'Test' + testId,
                  label: `Тест ${index + 1}`,
                  children: <TestPage testId={testId}></TestPage>,
                };
              })}
            ></Collapse>
          ),
        },
      ];
    }, [data]);

  const handleEditClick = () => {
    router.push(`/admin/lessons/${id}/edit`);
  };

  const handleAttendanceClick = () => {
    router.push(`/admin/lessons/${id}/attendance`);
  };

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    borderRadius: 8,
    border: 'none',
    background: '#fafafa',
    // fontWeight: 'normal',
  };

  return (
    <BasePageLayout
      header={
        <h2>
          Урок {data?.lesson?.lessonNumber}: {data?.lesson?.title}
        </h2>
      }
    >
      {isAdmin && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Button type="primary" size="large" onClick={handleAttendanceClick}>
            Посещаемость
          </Button>
          <Button
            size="large"
            icon={<EditOutlined></EditOutlined>}
            onClick={handleEditClick}
          >
            Редактировать
          </Button>
          <LessonDeleteBtn id={id} />
        </div>
      )}
      <Collapse
        bordered={false}
        items={collapseItems(panelStyle)}
        defaultActiveKey={['1', '2', '3', '4']}
        style={{ background: '#fff' }}
      ></Collapse>
    </BasePageLayout>
  );
};
