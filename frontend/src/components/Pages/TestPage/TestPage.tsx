'use client';
import { useGetTestByIdQuery } from '@/redux/services/api';
import { useGetSolutionByAssignmentIdAndLearnerIdQuery } from '@/redux/services/api';

import { GetTest_Response } from '@proto/assignments/test_api';

import { Divider } from 'antd';

import styles from '../HomeworkPage/HomeworkPage.module.css';
import { PaperClipOutlined } from '@ant-design/icons';

export const TestPage = ({ TestId }: { TestId: string }) => {
  // const { data: testData } = useGetTestByIdQuery(TestId);

  const { data: solutionData } = useGetSolutionByAssignmentIdAndLearnerIdQuery({
    assignmentId: '',
    learnerId: '',
  });

  const mockTestData: GetTest_Response = {
    test: {
      title: 'HW_1',
      description: `Об организации курса, формат работы
      Как зарождаются стартапы
      Методологии генерации идей
      Тренды как источники идей для стартапа
      Дизайн-мышление для бизнеса
      Игра на развитие креативного мышления
      Групповая работа с картой клиента (CJM)
      Метод Леонардо да Винчи, латерального мышления, глобализации, Андерсена, инверсии и параллельный миры для развития креативного мышления
      Тестирование для оценки знаний аудитории`,
      deadlineDate: new Date(),
      publishDate: new Date(),
      externalMaterialUrls: ['asd', 'asdf'],
      gradingCriteria: `За что может быть снижена оценка: 
      1. Несоответствие содержанию (Если пункт отсутствует полностью, то снимается полностью указанный в описании дз балл, если некорректное описание, то половина указанных баллов):
      1.1. нет название проекта, 
      1.2. отсутствует описание проекта, 
      1.3. нет описания целевой аудитории,
      1.4. отсутствует описание проблемы, которую решает проект,
      1.5. не упоминается технология, которая будет использоваться для реализации проекта
      2. Длительность видео больше одной минуты (за это снимается 1 балл);
      3. Несоблюдение дедлайна.
      Каждый просроченный день -1 балл;
      4. 1 балл за оформление и дизайн.
      
      Дедлайн: 23:59 18.10.22
      
      Пример: https://docs.google.com/spreadsheets/d/12WuZxIpM_5uEhsVDknwlCUMWtX1ONqsnnvwVHK9psaU/edit?usp=sharing`,
      id: 'qft',
      lesson: {
        id: 'asd',
        title: 'lesson_1',
        lessonNumber: 1,
        publishDate: new Date(),
      },
    },
  };

  const testData = mockTestData;

  return (
    <div style={{ wordBreak: 'break-word' }}>
      <h3>{testData?.test?.title || ''}</h3>
      <section className={styles.section}>
        <p className={styles.section_title}>Описание</p>
        <div>{testData?.test?.description}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Критерии</p>
        <div>{testData?.test?.gradingCriteria}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Дедлайн</p>
        <div>{testData?.test?.deadlineDate?.toDateString()}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Дата публикации</p>
        <div>{testData?.test?.publishDate?.toDateString()}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Дополнительные материалы</p>
        {testData?.test?.externalMaterialUrls.map((url) => {
          return <a href="url">urlx</a>;
        })}
      </section>

      <Divider></Divider>

      <h3>Решение</h3>
      <section className={styles.section}>
        <p className={styles.section_title}>Статус</p>
        <div>загружено</div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Номер команды</p>
        <div>{solutionData?.team.number}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Кем сдано</p>
        <div>{`${solutionData?.uploader.name} ${solutionData?.uploader.surname}`}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Дата загрузки</p>
        <div>{solutionData?.completeDateTime}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Файл</p>
        <div style={{ display: 'flex', gap: 4 }}>
          <PaperClipOutlined />
          <span>
            <a
              style={{ textDecoration: 'underline' }}
              href={solutionData?.fileUrl}
            >
              Файл
            </a>
          </span>
        </div>
      </section>

      {/* <div>{solutionData?.HW?.id}</div>
      <div>{solutionData?.HW?.title}</div>
      <div>{`${solutionData?.learner.name} ${solutionData?.learner.surname}`}</div>
      <div>{solutionData?.id}</div> */}
      {/* TODO: оценка и комменты */}
    </div>
  );
};
