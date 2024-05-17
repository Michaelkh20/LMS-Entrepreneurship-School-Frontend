import { Grade, HomeworkSnippet, Submission } from '@/types/api';

export const mockSubmission: Submission = {
  id: '5705e851-f7b6-4096-a5e4-98719735643f',
  team: undefined,
  homework: {
    id: '47d1b4ef-de82-477e-944b-8090eb302837',
    lesson: {
      id: '3725d6c0-9302-4ccf-a9e4-b33a41b8231b',
      title: 'Введение в предпринимательство',
      lessonNumber: 1,
      publishDate: new Date('2024-05-18T21:00:00.000Z'),
    },
    title: 'Домашнее задание №1',
    deadlineDate: new Date('2024-05-22T21:00:00.000Z'),
  },
  owner: {
    id: '5d39cf0e-4b5d-4141-b4bc-407c95187758',
    name: 'Михаил',
    surname: 'Хооллгм',
    patronymic: 'Уулларгович',
  },
  publisher: {
    id: '5d39cf0e-4b5d-4141-b4bc-407c95187758',
    name: 'Михаил',
    surname: 'Хооллгм',
    patronymic: 'Уулларгович',
  },
  publishedAt: new Date('2024-05-15T18:59:16.353Z'),
  payload: {
    textAnswer: 'Работу выполнил',
    attachmentUrls: ['test.txt'],
  },
};

export const mockHomework: HomeworkSnippet = {
  id: '47d1b4ef-de82-477e-944b-8090eb302837',
  lesson: {
    id: '3725d6c0-9302-4ccf-a9e4-b33a41b8231b',
    title: 'Введение в предпринимательство',
    lessonNumber: 1,
    publishDate: new Date('2024-05-18T21:00:00.000Z'),
  },
  deadlineDate: new Date('2024-05-22T21:00:00.000Z'),
  title: 'Домашнее задание №1',
};

export const mockGrades: Grade[] = [
  {
    id: 'sadasdas',
    adminGrade: 7,
    adminComment: 'Хорошая работа',
    gradeOwner: {
      id: 'dasdasdfsdf',
      name: 'Михаил',
      surname: 'Хооллгм',
      patronymic: 'Уулларгович',
    },
    submissionForGrading: mockSubmission,
    task: {
      $case: 'homework',
      homework: {
        id: '47d1b4ef-de82-477e-944b-8090eb302837',
        lesson: {
          id: '3725d6c0-9302-4ccf-a9e4-b33a41b8231b',
          title: 'Введение в предпринимательство',
          lessonNumber: 1,
          publishDate: new Date('2024-05-18T21:00:00.000Z'),
        },
        deadlineDate: new Date('2024-05-22T21:00:00.000Z'),
        title: 'Домашнее задание №1',
      },
    },
    trackerGrades: [
      {
        id: 'dasdas',
        grade: 7,
        comment: 'Нормально',
        tracker: {
          id: 'dasdas',
          name: 'Иван',
          surname: 'Иванов',
          patronymic: 'Иванович',
        },
      },
      {
        id: 'adfasf',
        grade: 8,
        comment: 'Хорошо сделано',
        tracker: {
          id: 'dasdas',
          name: 'Петров',
          surname: 'Пётр',
          patronymic: 'Петрович',
        },
      },
    ],
  },
  {
    id: 'sadaqwesdas',
    adminGrade: 8,
    adminComment: 'Хорошая работа',
    gradeOwner: {
      id: 'dasdasdfsdf',
      name: 'Никита',
      surname: 'Жуйков',
      patronymic: 'Денисович',
    },
    submissionForGrading: mockSubmission,
    task: {
      $case: 'homework',
      homework: {
        id: '47d1b4ef-de82-477e-944b-8090eb302837',
        lesson: {
          id: '3725d6c0-9302-4ccf-a9e4-b33a41b8231b',
          title: 'Введение в предпринимательство',
          lessonNumber: 1,
          publishDate: new Date('2024-05-18T21:00:00.000Z'),
        },
        deadlineDate: new Date('2024-05-22T21:00:00.000Z'),
        title: 'Домашнее задание №1',
      },
    },
    trackerGrades: [
      {
        id: 'qwqeghbfdh',
        grade: 8,
        comment: 'Хорошая работа',
        tracker: {
          id: '2c6ae16d-4ff4-4951-bd3a-f983c67f03b3',
          name: 'Иван',
          surname: 'Иванов',
          patronymic: 'Иванович',
        },
      },
      {
        id: 'adfasf',
        grade: 8,
        comment: 'Хорошо сделано',
        tracker: {
          id: 'dasdas',
          name: 'Петров',
          surname: 'Пётр',
          patronymic: 'Петрович',
        },
      },
    ],
  },
  {
    id: 'sadaqwesdas',
    adminGrade: 8,
    adminComment: 'Хорошая работа',
    gradeOwner: {
      id: 'dasdasdfsdf',
      name: 'Герман',
      surname: 'Михайлов',
      patronymic: 'Леонидович',
    },
    submissionForGrading: mockSubmission,
    task: {
      $case: 'homework',
      homework: {
        id: '47d1b4ef-de82-477e-944b-8090eb302837',
        lesson: {
          id: '3725d6c0-9302-4ccf-a9e4-b33a41b8231b',
          title: 'Введение в предпринимательство',
          lessonNumber: 1,
          publishDate: new Date('2024-05-18T21:00:00.000Z'),
        },
        deadlineDate: new Date('2024-05-22T21:00:00.000Z'),
        title: 'Домашнее задание №1',
      },
    },
    trackerGrades: [
      {
        id: ';khjghjfg',
        grade: 6,
        comment: 'Нормальная работа',
        tracker: {
          id: '2c6ae16d-4ff4-4951-bd3a-f983c67f03b3',
          name: 'Иван',
          surname: 'Иванов',
          patronymic: 'Иванович',
        },
      },
      {
        id: 'adfasf',
        grade: 8,
        comment: 'Хорошо сделано',
        tracker: {
          id: 'dasdas',
          name: 'Петров',
          surname: 'Пётр',
          patronymic: 'Петрович',
        },
      },
    ],
  },
];

export const gradeMock: Grade = {
  id: 'sadasdas',
  adminGrade: 7,
  adminComment: 'Хорошая работа',
  gradeOwner: null!,
  submissionForGrading: null!,
  task: null!,
  trackerGrades: [
    {
      id: 'dasdas',
      grade: 7,
      comment: 'Нормально',
      tracker: {
        id: 'dasdas',
        name: 'Иван',
        surname: 'Иванов',
        patronymic: 'Иванович',
      },
    },
    {
      id: 'adfasf',
      grade: 8,
      comment: 'Хорошо сделано',
      tracker: {
        id: 'dasdas',
        name: 'Петров',
        surname: 'Пётр',
        patronymic: 'Петрович',
      },
    },
  ],
};
