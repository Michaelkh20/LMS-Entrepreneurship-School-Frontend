'use client';

import { useState } from 'react';
import styles from '../lessons.module.css';
import ReactQuill from 'react-quill';

import { useGetLessonByIdQuery } from '@/redux/services/api';
import { Collapse, CollapseProps } from 'antd';

import DOMPurify from 'dompurify';

import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { GetLesson_Response } from '@proto/lessons/lessons_api';
import { HomeworkPage } from '@/components/Pages/HomeworkPage/HomeworkPage';
import { TestPage } from '@/components/Pages/TestPage/TestPage';

type lessonType = {
  lessonTitle: string;
  lessonDescription: string;
};

export default function LessonPage({
  params: { id },
}: {
  params: { id: string };
}) {
  // const { data } = useGetLessonByIdQuery(id);

  const [textField, setTextField] = useState('');

  const lessonDescriptionHtml = `<ul><li> &nbsp;Об организации курса, формат работы</li><li>&nbsp;&nbsp;Как зарождаются стартапы</li><li>&nbsp;&nbsp;Методологии генерации идей</li><li>&nbsp;&nbsp;Тренды как источники идей для стартапа</li><li>&nbsp;&nbsp;Дизайн-мышление для бизнеса</li><li>&nbsp;&nbsp;Игра на развитие креативного мышления</li><li>&nbsp;&nbsp;Групповая работа с картой клиента (CJM)</li><li>&nbsp;&nbsp;Метод Леонардо да Винчи, латерального мышления, глобализации, Андерсена, инверсии и параллельный миры для развития креативного мышления</li><li>&nbsp;&nbsp;Тестирование для оценки знаний аудитории</li></ul>`;

  const lessonsData: GetLesson_Response = {
    lesson: {
      id: '',
      title:
        'Тема 1: Организационная часть. Генерация идей. Идеи для стартапа: откуда их брать? ',
      lessonNumber: 1,
      publishDate: new Date(),
      presentationUrls: ['s1', 's2', 's3'],
      videoUrls: [
        'https://www.youtube.com/embed/dQw4w9WgXcQ?si=Tv5JyQ7W1OEuiEkU',
        'https://www.youtube.com/embed/dQw4w9WgXcQ?si=Tv5JyQ7W1OEuiEkU',
        'https://www.youtube.com/embed/dQw4w9WgXcQ?si=Tv5JyQ7W1OEuiEkU',
        'https://www.youtube.com/embed/dQw4w9WgXcQ?si=Tv5JyQ7W1OEuiEkU',
      ],
      homeworkIds: ['1', '2', '3'],
      testIds: ['4', '5'],
      description: `Об организации курса, формат работы
      Как зарождаются стартапы
      Методологии генерации идей
      Тренды как источники идей для стартапа
      Дизайн-мышление для бизнеса
      Игра на развитие креативного мышления
      Групповая работа с картой клиента (CJM) Метод Леонардо да Винчи, латерального мышления, глобализации, Андерсена, инверсии и параллельный миры для развития креативного мышления Тестирование для оценки знаний аудитории`,
    },
  };

  const data = lessonsData;

  const VideoSection = () => {
    return (
      <div
        style={{
          display: 'flex',
          // flexDirection: 'column',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {data?.lesson?.videoUrls.map((videoUrl) => {
          return (
            <iframe
              style={{
                width: '100%',
                minHeight: '300px',
                maxWidth: '600px',
                height: '70%',
              }}
              src={`${videoUrl}`}
              title="YouTube video player"
              frameBorder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={true}
            ></iframe>
          );
        })}
      </div>
    );
  };

  const PresentationsSection = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: '1rem',
          paddingTop: '1.25rem',
        }}
      >
        <h3>Презентации</h3>
        {data?.lesson?.presentationUrls.map((presUrl, index) => {
          return (
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '.25rem',
                // textDecoration: 'underline',
              }}
              href={`${presUrl}`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.57985 1.7758C7.31825 0.514188 5.26378 0.514188 4.00351 1.7758L0.507978 5.26865C0.485211 5.29142 0.473157 5.32222 0.473157 5.35437C0.473157 5.38651 0.485211 5.41731 0.507978 5.44008L1.00217 5.93428C1.02476 5.95677 1.05534 5.96939 1.08722 5.96939C1.1191 5.96939 1.14967 5.95677 1.17226 5.93428L4.6678 2.44142C5.10173 2.00749 5.67896 1.7691 6.29235 1.7691C6.90575 1.7691 7.48298 2.00749 7.91557 2.44142C8.3495 2.87535 8.58789 3.45258 8.58789 4.06463C8.58789 4.67803 8.3495 5.25392 7.91557 5.68785L4.35307 9.24901L3.77584 9.82624C3.2361 10.366 2.35887 10.366 1.81914 9.82624C1.55798 9.56508 1.41467 9.21821 1.41467 8.84856C1.41467 8.47892 1.55798 8.13205 1.81914 7.87088L5.35351 4.33785C5.44325 4.24946 5.5611 4.1999 5.687 4.1999H5.68834C5.81423 4.1999 5.93075 4.24946 6.01914 4.33785C6.10887 4.42758 6.15709 4.54544 6.15709 4.67133C6.15709 4.79588 6.10753 4.91374 6.01914 5.00213L3.1303 7.8883C3.10753 7.91106 3.09548 7.94187 3.09548 7.97401C3.09548 8.00615 3.10753 8.03696 3.1303 8.05972L3.6245 8.55392C3.64709 8.57641 3.67766 8.58904 3.70954 8.58904C3.74142 8.58904 3.772 8.57641 3.79459 8.55392L6.68209 5.66642C6.9486 5.3999 7.09459 5.04633 7.09459 4.66999C7.09459 4.29365 6.94726 3.93874 6.68209 3.67356C6.13164 3.12312 5.237 3.12446 4.68655 3.67356L4.34369 4.01776L1.15351 7.2066C0.936993 7.42185 0.76536 7.67795 0.64857 7.96003C0.53178 8.24212 0.472157 8.54459 0.473157 8.8499C0.473157 9.46999 0.715568 10.0526 1.15351 10.4905C1.60753 10.9432 2.20217 11.1695 2.79682 11.1695C3.39146 11.1695 3.9861 10.9432 4.43878 10.4905L8.57985 6.35213C9.18923 5.74142 9.52673 4.92847 9.52673 4.06463C9.52807 3.19946 9.19057 2.38651 8.57985 1.7758Z"
                  fill="black"
                />
              </svg>
              Преза_{index}
            </a>
          );
        })}
      </div>
    );
  };

  const collapseItems: CollapseProps['items'] = [
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
      key: '4',
      label: 'Материалы',
      children: (
        <div>
          <VideoSection />
          <PresentationsSection />
        </div>
      ),
    },
    {
      key: '2',
      label: 'Домашнее задание',
      children: (
        <Collapse
          defaultActiveKey={'0'}
          items={data.lesson?.homeworkIds.map((hwId, index) => {
            return {
              key: index,
              label: `ДЗ ${index + 1}`,
              children: <HomeworkPage HwId={hwId}></HomeworkPage>,
            };
          })}
        ></Collapse>
      ),
    },
    {
      key: '3',
      label: 'Тест',
      children: (
        <Collapse
          defaultActiveKey={'0'}
          items={data.lesson?.testIds.map((testId, index) => {
            return {
              key: index,
              label: `Тест ${index + 1}`,
              children: <TestPage TestId={testId}></TestPage>,
            };
          })}
        ></Collapse>
      ),
    },
  ];

  return (
    <div className={styles.main__container}>
      <h1 className={styles.main__header}>Урок {data?.lesson?.lessonNumber}</h1>
      <h2>{data?.lesson?.title}</h2>

      <Collapse items={collapseItems} defaultActiveKey={['1', '4']}></Collapse>
    </div>
  );
}
