import { dto } from '../../protobuffs/dto/index.js';
import LotStatus = dto.LotStatus;
import Lot from '../db/entities/lot.js';

const lots = [
  {
    id: 1,
    number: '1',
    title: 'Консультации по подготовке заявки для участия в олимпиаде/конкурсе',
    description:
      'Консультации по подготовке заявки для участия в олимпиаде/конкурсе',
    terms:
      'нужно написать о желании получить консультацию куратору конкурсов Писать нужно заблаговременно (желательно за 2-3 дня до созвона + учитывать время подачи зачвки на конкурс/олимпиаду)',
    price: 100,
    status: LotStatus.ACTIVE,
    performerId: '79974e29-daa7-404d-9144-3b081bef4423',
    date: new Date(2024, 2, 1),
  },
  {
    id: 2,
    number: '2',
    title: 'Разработка дизайна логотипа',
    description: 'Создание логотипа для вашего нового проекта или компании',
    terms:
      'Предоставление 3 вариантов логотипа, возможность внесения двух раундов правок',
    price: 300,
    status: LotStatus.ACTIVE,
    performerId: '79974e29-daa7-404d-9144-3b081bef4423',
    date: new Date(2024, 3, 11),
  },
  {
    id: 3,
    number: '3',
    title: 'Курс по основам программирования',
    description:
      'Обучение основам программирования на языке Python для начинающих',
    terms: 'Длительность курса 4 недели, занятия по вечерам 2 раза в неделю',
    price: 500,
    status: LotStatus.ACTIVE,
    performerId: 'e545e26a-19c4-4b92-9aa7-b7d9eede56b9',
    date: new Date(2024, 3, 23),
  },
  {
    id: 4,
    number: '4',
    title: 'Организация корпоративного мероприятия',
    description:
      'Подготовка и проведение корпоративного мероприятия для вашей компании',
    terms: 'Подбор места, кейтеринг, развлекательная программа',
    price: 2000,
    status: LotStatus.ACTIVE,
    performerId: 'e545e26a-19c4-4b92-9aa7-b7d9eede56b9',
    date: new Date(2024, 1, 12),
  },
  {
    id: 5,
    number: '5',
    title: 'Профессиональная фотосъемка',
    description: 'Фотосессия в профессиональной фотостудии или на природе',
    terms:
      'Длительность съемки до 2 часов, предоставление 20 обработанных фотографий',
    price: 150,
    status: LotStatus.ACTIVE,
    performerId: '2ff3a1fe-a155-4098-89d4-bedbf79123c1',
    date: new Date(2024, 3, 11),
  },
  {
    id: 6,
    number: '6',
    title: 'Перевод документов с английского на русский',
    description:
      'Профессиональный перевод документов, статей, инструкций с английского на русский',
    terms: 'Срок выполнения - до 3 рабочих дней, стоимость указана за страницу',
    price: 50,
    status: LotStatus.ACTIVE,
    performerId: '2ff3a1fe-a155-4098-89d4-bedbf79123c1',
    date: new Date(2024, 2, 25),
  },
  {
    id: 7,
    number: '7',
    title: 'SEO-оптимизация веб-сайта',
    description:
      'Комплекс работ по SEO-оптимизации и продвижению сайта в поисковых системах',
    terms:
      'Аудит сайта, подбор ключевых слов, внутренняя оптимизация, мониторинг позиций',
    price: 1200,
    status: LotStatus.ACTIVE,
    performerId: '129ada0b-0c3f-45d4-80b4-6dbabcb300a9',
    date: new Date(2024, 3, 17),
  },
  {
    id: 8,
    number: '8',
    title: 'Обучение игре на гитаре',
    description:
      'Индивидуальные уроки игры на гитаре для начинающих и продолжающих',
    terms: '8 занятий в месяц, длительность одного занятия 1 час',
    price: 400,
    status: LotStatus.ACTIVE,
    performerId: '129ada0b-0c3f-45d4-80b4-6dbabcb300a9',
    date: new Date(2024, 2, 13),
  },
  {
    id: 9,
    number: '9',
    title: 'Разработка мобильного приложения',
    description: 'Разработка мобильного приложения под Android и iOS',
    terms:
      'Создание ТЗ, дизайн, программирование, тестирование и запуск приложения',
    price: 5000,
    status: LotStatus.ACTIVE,
    performerId: '3b0e016b-26b5-406f-84ec-4a52ba888d89',
    date: new Date(2024, 3, 18),
  },
  {
    id: 10,
    number: '10',
    title: 'Создание видеоролика',
    description: 'Разработка концепции, съемка и монтаж рекламного видеоролика',
    terms: 'Создание сценария, подбор актеров, съемка, монтаж и цветокоррекция',
    price: 2500,
    status: LotStatus.ACTIVE,
    performerId: '3b0e016b-26b5-406f-84ec-4a52ba888d89',
    date: new Date(2024, 2, 7),
  },
  {
    id: 11,
    number: '11',
    title: 'Консультация по ведению социальных сетей',
    description:
      'Индивидуальная консультация по стратегии продвижения в социальных сетях',
    terms:
      'Анализ текущего состояния аккаунта, подбор стратегии, рекомендации по контент-плану',
    price: 250,
    status: LotStatus.ACTIVE,
    performerId: '32a17501-3973-48bd-a5f3-fa948dc2b52a',
    date: new Date(2024, 3, 16),
  },
  {
    id: 12,
    number: '12',
    title: 'Разработка мобильного приложения',
    description: 'Создание мобильного приложения под ключ для iOS и Android',
    terms:
      'Разработка концепта, дизайна, программирование, тестирование, запуск в продакшн',
    price: 10000,
    status: LotStatus.ACTIVE,
    performerId: '32a17501-3973-48bd-a5f3-fa948dc2b52a',
    date: new Date(2024, 3, 18),
  },
  {
    id: 13,
    number: '13',
    title: 'Перевод текстов с английского на русский',
    description:
      'Качественный перевод текстов любой сложности с английского на русский язык',
    terms:
      'Перевод технической, научной и художественной литературы. Работа с большими объемами.',
    price: 50,
    status: LotStatus.ACTIVE,
    performerId: 'c4ce5ffb-1899-4043-ab66-61e381f71a4d',
    date: new Date(2024, 3, 14),
  },
  {
    id: 14,
    number: '14',
    title: 'Создание и продвижение сайта',
    description: 'Разработка и комплексное продвижение сайтов под ключ',
    terms:
      'Проектирование, дизайн, программирование сайта, SEO-оптимизация, контекстная реклама',
    price: 5000,
    status: LotStatus.ACTIVE,
    performerId: 'c4ce5ffb-1899-4043-ab66-61e381f71a4d',
    date: new Date(2024, 1, 9),
  },
  {
    id: 15,
    number: '15',
    title: 'Обучение игре на гитаре',
    description:
      'Индивидуальные уроки игры на гитаре для начинающих и продолжающих',
    terms:
      'Разучивание аккордов, мелодий, работа над чувством ритма, подбор индивидуальной программы',
    price: 200,
    status: LotStatus.ACTIVE,
    performerId: '06c0cb95-1f81-4b3a-8ccb-84187920e716',
    date: new Date(2024, 3, 19),
  },
];

const mappedLots = lots.map(
  (lot) =>
    new Lot(
      lot.number,
      lot.title,
      lot.description,
      lot.terms,
      lot.price,
      lot.status,
      lot.performerId,
      lot.date
    )
);

export default mappedLots;
