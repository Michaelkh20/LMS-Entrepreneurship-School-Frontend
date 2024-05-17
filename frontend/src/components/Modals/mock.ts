import {
  Lot,
  SubmissionWithAttachments,
  ListLotClaim,
  TransferClaimsPage,
  ListLotClaimsPage,
  BuyLotClaimsPage,
} from '@/types/api';
import { LotStatus, TwoSidedClaimStatus } from '@/types/common';
import { IGradesList } from '@/types/proto';
import { Grade } from '@proto/grades';

const mockDataLot: Lot = {
  id: '23',
  number: 23,
  status: LotStatus.OnSale,
  title: 'Курс по основам программирования',
  description:
    'Обучение основам программирования на языке Python для начинающих',
  terms: 'Длительность курса 4 недели, занятия по вечерам 2 раза в неделю',
  price: 500,
  performer: {
    id: '11',
    name: 'Жуйков Никита',
  },
  listingDate: '15.05.2024',
};

const mockDataSubmissionWithAttachments: SubmissionWithAttachments = {
  attachments: [
    {
      name: 'test.txt',
      url: '',
    },
  ],
  homework: {
    id: '',
    lesson: {
      id: '',
      title: 'Домашнее задание №1',
      lessonNumber: 1,
      publishDate: new Date(2024, 4, 15),
    },
    title: '',
    deadlineDate: new Date(),
  },
  id: '',
  owner: {
    id: '',
    name: 'Михаил',
    surname: 'Хооллгм',
    patronymic: undefined,
  },
  publishedAt: new Date(2024, 4, 15, 21, 59, 16),
  publisher: {
    id: '',
    name: 'Михаил',
    surname: 'Хооллгм',
    patronymic: undefined,
  },
  team: undefined,
  textAnswer: 'Работу выполнил',
};

const mockDataListLotClaim: ListLotClaim = {
  id: 'lot2',
  status: TwoSidedClaimStatus.Approved,
  date: '15.05.2024',
  lot: {
    id: '23',
    title: 'Курс по основам программирования',
    description:
      'Обучение основам программирования на языке Python для начинающих',
    terms: 'Длительность курса 4 недели, занятия по вечерам 2 раза в неделю',
    price: 500,
    performer: {
      id: 'id2',
      name: 'Никита',
      surname: 'Жуйков',
      patronymic: undefined,
    },
  },
};

const mockDataGrade: Grade = {
  id: '',
  gradeOwner: {
    id: '',
    name: 'Михаил',
    surname: 'Хооллгм',
    patronymic: undefined,
  },
  task: {
    $case: 'homework',
    homework: {
      id: '1',
      lesson: {
        id: '11',
        title: 'Урок №1, Введение в предпринимательство',
        lessonNumber: 1,
        publishDate: new Date(2024, 4, 15),
      },
      title: 'Домашнее задание №1',
      deadlineDate: new Date(2024, 4, 23),
    },
  },
  submissionForGrading: {
    homework: {
      id: '',
      lesson: {
        id: '',
        title: '',
        lessonNumber: 0,
        publishDate: new Date(2024, 4, 15),
      },
      title: '',
      deadlineDate: new Date(2024, 4, 20),
    },
    id: '',
    owner: {
      id: '',
      name: '',
      surname: '',
      patronymic: undefined,
    },
    payload: {
      textAnswer: '',
      attachmentUrls: [],
    },
    publishedAt: new Date(2024, 4, 15),
    publisher: {
      id: '',
      name: 'Михаил',
      surname: 'Хооллгм',
      patronymic: undefined,
    },
    team: undefined,
  },
  adminGrade: 7,
  adminComment: 'Хорошая работа!',
  // adminGrade: undefined,
  // adminComment: undefined,
  trackerGrades: [],
};
const mockDataIGradesList: IGradesList = {
  page: {
    totalPages: 0,
    totalElements: 0,
  },
  grades: [
    {
      id: '',
      gradeOwner: {
        id: '',
        name: 'Михаил',
        surname: 'Хооллгм',
        patronymic: undefined,
      },
      task: {
        $case: 'homework',
        homework: {
          id: '1',
          lesson: {
            id: '11',
            title: 'Урок №1, Введение в предпринимательство',
            lessonNumber: 1,
            publishDate: new Date(2024, 4, 15),
          },
          title: 'Домашнее задание №1',
          deadlineDate: new Date(2024, 4, 23),
        },
      },
      submissionForGrading: {
        homework: {
          id: '',
          lesson: {
            id: '',
            title: '',
            lessonNumber: 0,
            publishDate: new Date(2024, 4, 15),
          },
          title: '',
          deadlineDate: new Date(2024, 4, 20),
        },
        id: '',
        owner: {
          id: '',
          name: '',
          surname: '',
          patronymic: undefined,
        },
        payload: {
          textAnswer: '',
          attachmentUrls: [],
        },
        publishedAt: new Date(2024, 4, 15),
        publisher: {
          id: '',
          name: 'Михаил',
          surname: 'Хооллгм',
          patronymic: undefined,
        },
        team: undefined,
      },
      adminGrade: undefined,
      adminComment: undefined,
      trackerGrades: [],
    },
    {
      id: '',
      gradeOwner: {
        id: '',
        name: 'Михаил',
        surname: 'Хооллгм',
        patronymic: undefined,
      },
      task: {
        $case: 'homework',
        homework: {
          id: '1',
          lesson: {
            id: '11',
            title: 'Урок №1, Введение в предпринимательство',
            lessonNumber: 1,
            publishDate: new Date(2024, 4, 15),
          },
          title: 'Домашнее задание №2',
          deadlineDate: new Date(2024, 4, 23),
        },
      },
      submissionForGrading: {
        homework: {
          id: '',
          lesson: {
            id: '',
            title: '',
            lessonNumber: 0,
            publishDate: new Date(2024, 4, 15),
          },
          title: '',
          deadlineDate: new Date(2024, 4, 20),
        },
        id: '',
        owner: {
          id: '',
          name: '',
          surname: '',
          patronymic: undefined,
        },
        payload: {
          textAnswer: '',
          attachmentUrls: [],
        },
        publishedAt: new Date(2024, 4, 15),
        publisher: {
          id: '',
          name: 'Михаил',
          surname: 'Хооллгм',
          patronymic: undefined,
        },
        team: undefined,
      },
      adminGrade: 7,
      adminComment: undefined,
      trackerGrades: [],
    },
  ],
};

const mockDataTransferClaimsPage: TransferClaimsPage = {
  pagination: {
    totalPages: 1,
    totalElements: 1,
  },
  claims: [
    {
      id: '1',
      sender: {
        id: '1',
        name: 'Никита',
        surname: 'Жуйков',
        patronymic: undefined,
      },
      receiver: {
        id: '2',
        name: 'Михаил',
        surname: 'Хооллгм',
        patronymic: undefined,
      },
      sum: 100,
    },
    {
      id: '11',
      sender: {
        id: '111',
        name: 'Михаил',
        surname: 'Хооллгм',
        patronymic: undefined,
      },
      receiver: {
        id: '22',
        name: 'Никита',
        surname: 'Жуйков',
        patronymic: undefined,
      },
      sum: 150,
    },
  ],
};

const mockDataListLotClaimsPage: ListLotClaimsPage = {
  pagination: {
    totalPages: 1,
    totalElements: 1,
  },
  claims: [
    {
      id: '1',
      status: TwoSidedClaimStatus.Approved,
      date: '15.05.2024',
      lot: {
        number: 23,
        title: '№23',
        price: 500,
        performer: {
          id: 'id1',
          name: 'Никита',
          surname: 'Жуйков',
          patronymic: '',
        },
      },
    },
  ],
};

const mockDataBuyLotClaimsPage: BuyLotClaimsPage = {
  pagination: {
    totalPages: 1,
    totalElements: 3,
  },
  claims: [
    {
      id: '',
      status: TwoSidedClaimStatus.WaitingAdmin,
      buyer: {
        id: '1',
        name: 'Михаил',
        surname: 'Хооллгм',
        patronymic: '',
      },
      date: '15.05.2024',
      lot: {
        number: 23,
        title: '23',
        price: 500,
        performer: {
          id: '2',
          name: 'Никита',
          surname: 'Жуйков',
          patronymic: 'null',
        },
      },
    },
  ],
};
