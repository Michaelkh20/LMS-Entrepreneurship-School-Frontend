import { CompetitionSnippet } from '@proto/assignments/competition_api';
import { ExamSnippet } from '@proto/assignments/exam_api';
import { GetHomework_Response } from '@proto/assignments/homework_api';
import { LessonSnippet } from '@proto/lessons/lessons_api';

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

const examsMockData: ExamSnippet[] = [
  {
    id: 'e1',
    title: 'Экзамен зима',
    deadlineDate: undefined,
  },
  {
    id: 'e2',
    title: 'Экзамен лето',
    deadlineDate: undefined,
  },
];

const competitionsMockData: CompetitionSnippet[] = [
  {
    id: 'с1',
    title: 'Конкурс зима',
    deadlineDate: undefined,
  },
  {
    id: 'с2',
    title: 'Конкурс лето',
    deadlineDate: undefined,
  },
];

const lessonsMockData: LessonSnippet[] = [
  {
    id: '1',
    lessonNumber: 1,
    title: 'Генерация идей',
    publishDate: new Date(),
  },
  {
    id: '2',
    lessonNumber: 2,
    title: 'Ошибки при выводе продуктов на рынок',
    publishDate: new Date(),
  },
  {
    id: '3',
    lessonNumber: 3,
    title: 'Модели монетизации и ценообразование',
    publishDate: new Date(),
  },
  {
    id: '4',
    lessonNumber: 4,
    title: 'Модели монетизации и ценообразование',
    publishDate: undefined,
  },
  {
    id: '5',
    lessonNumber: 5,
    title: 'Модели монетизации и ценообразование',
    publishDate: undefined,
  },
  {
    id: '6',
    lessonNumber: 6,
    title: 'Модели монетизации и ценообразование',
    publishDate: undefined,
  },
  {
    id: '7',
    lessonNumber: 7,
    title: 'Модели монетизации и ценообразование',
    publishDate: undefined,
  },
  {
    id: '8',
    lessonNumber: 8,
    title: 'Модели монетизации и ценообразование',
    publishDate: undefined,
  },
  {
    id: '9',
    lessonNumber: 9,
    title: 'Модели монетизации и ценообразование',
    publishDate: undefined,
  },
];
