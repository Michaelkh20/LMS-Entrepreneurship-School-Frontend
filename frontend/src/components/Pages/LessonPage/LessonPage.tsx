'use client';

import { useMemo, useState } from 'react';

// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';

import { useGetLessonByIdQuery } from '@/redux/services/api';

import { Button, Collapse, CollapseProps, Space } from 'antd';
import DOMPurify from 'dompurify';

import { GetLesson_Response } from '@proto/lessons/lessons_api';
import { HomeworkPage } from '@/components/Pages/HomeworkPage/HomeworkPage';
import { TestPage } from '@/components/Pages/TestPage/TestPage';
import { useAuth } from '@/redux/features/authSlice';

import styles from './LessonPage.module.css';
import { EditOutlined, PaperClipOutlined } from '@ant-design/icons';
import { VideoSection } from './Components/VideoSection';
import { PresentationsSection } from './Components/PresentationsSection';

type lessonType = {
  lessonTitle: string;
  lessonDescription: string;
};

export const LessonPage = ({ params: { id } }: { params: { id: string } }) => {
  const { data } = useGetLessonByIdQuery(id);
  const [textField, setTextField] = useState('');

  const [, , { isAdmin }] = useAuth();

  const collapseItems: CollapseProps['items'] = useMemo(() => {
    return [
      {
        key: '1',
        label: 'Описание',
        // children: <div>{data?.lesson?.description}</div>,
        children: (
          <div
            style={{
              // whiteSpace: 'pre',
              paddingLeft: '1rem',
              // fontSize: '1rem',
              wordBreak: 'break-word',
            }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.lesson?.description!),
            }}
          ></div>
        ),
      },
      {
        key: '2',
        label: 'Материалы',
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
        children: (
          <Collapse
            defaultActiveKey={'0'}
            items={data?.lesson?.homeworkIds.map((hwId, index) => {
              return {
                key: index + 'HW' + hwId,
                label: `ДЗ ${index + 1}`,
                children: <HomeworkPage HwId={hwId}></HomeworkPage>,
              };
            })}
          ></Collapse>
        ),
      },
      {
        key: '4',
        label: 'Тест',
        children: (
          <Collapse
            defaultActiveKey={'0'}
            items={data?.lesson?.testIds.map((testId, index) => {
              return {
                key: index + 'Test' + testId,
                label: `Тест ${index + 1}`,
                children: <TestPage TestId={testId}></TestPage>,
              };
            })}
          ></Collapse>
        ),
      },
    ];
  }, [data]);

  return (
    <div className={styles.main__container}>
      <h1 className={styles.main__header}>Урок {data?.lesson?.lessonNumber}</h1>

      <h2>{data?.lesson?.title}</h2>
      {isAdmin && (
        <Space>
          <Button type="primary" size="large">
            Посещаемость
          </Button>
          <Button size="large" icon={<EditOutlined></EditOutlined>}>
            Редактировать
          </Button>
        </Space>
      )}
      <Collapse items={collapseItems} defaultActiveKey={['1', '2']}></Collapse>
    </div>
  );
};
