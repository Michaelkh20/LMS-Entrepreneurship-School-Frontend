import { CompetitionSnippet } from '@proto/assignments/competition_api';
import { ExamSnippet } from '@proto/assignments/exam_api';
import { LessonSnippet } from '@proto/lessons/lessons_api';

export const examsMockData: ExamSnippet[] = [
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

export const competitionsMockData: CompetitionSnippet[] = [
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

export const lessonsMockData: LessonSnippet[] = [
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
