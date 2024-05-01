'use client';
import { useGetHwByIdQuery } from '@/redux/services/api';
import { useGetSolutionByAssignmentIdAndLearnerIdQuery } from '@/redux/services/api';

import { GetHomework_Response } from '@proto/assignments/homework_api';

import { Divider } from 'antd';

import styles from './HomeworkPage.module.css';
import { PaperClipOutlined } from '@ant-design/icons';

export const HomeworkPage = ({ HwId }: { HwId: string }) => {
  //   const { data: hwData } = useGetHwByIdQuery(HwId);

  const { data: solutionData } = useGetSolutionByAssignmentIdAndLearnerIdQuery({
    assignmentId: '',
    learnerId: '',
  });

  const mockHwData: GetHomework_Response = {
    homework: {
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
      isGroupWork: true,
      id: 'qft',
      lesson: {
        id: 'asd',
        title: 'lesson_1',
        lessonNumber: 1,
        publishDate: new Date(),
      },
    },
  };

  const hwData = mockHwData;

  return (
    <div style={{ wordBreak: 'break-word' }}>
      {/* <h3>Домашнее задание</h3> */}

      <h3>{hwData?.homework?.title || ''}</h3>
      <section className={styles.section}>
        <p className={styles.section_title}>Описание</p>
        <div>{hwData?.homework?.description}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Критерии</p>
        <div>{hwData?.homework?.gradingCriteria}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Дедлайн</p>
        <div>{hwData?.homework?.deadlineDate?.toDateString()}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Дата публикации</p>
        <div>{hwData?.homework?.publishDate?.toDateString()}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Дополнительные материалы</p>
        {hwData?.homework?.externalMaterialUrls.map((url) => {
          return <a href="url">urlx</a>;
        })}
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Командное задание</p>
        <div>{hwData?.homework?.isGroupWork ? 'Да' : 'Нет'}</div>
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
